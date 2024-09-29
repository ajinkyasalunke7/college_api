from flask import Flask, jsonify, request
import mysql.connector
from flask_cors import CORS

app = Flask(__name__)

# Enable CORS for all routes
CORS(app)

# Database connection setup
def get_db_connection():
    connection = mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="college_api"
    )
    return connection

# Get all colleges
@app.route('/colleges', methods=['GET'])
def get_colleges():
    connection = get_db_connection()
    cursor = connection.cursor(dictionary=True)
    cursor.execute("SELECT * FROM College")
    colleges = cursor.fetchall()
    cursor.close()
    connection.close()
    return jsonify(colleges)

# Get college details along with course fee
@app.route('/college/<int:id>', methods=['GET'])
def get_college_details(id):
    connection = get_db_connection()
    cursor = connection.cursor(dictionary=True)
    
    # Get College details
    cursor.execute("SELECT * FROM College WHERE id = %s", (id,))
    college = cursor.fetchone()
    if not college:
        return jsonify({"message": "College not found"}), 404
    
    # Get Course Fee details
    cursor.execute("SELECT * FROM CourseFee WHERE college_id = %s", (id,))
    course_fee = cursor.fetchone()
    
    cursor.close()
    connection.close()

    # Combine data into one response
    result = {
        "college": college,
        "course_fees": course_fee if course_fee else {"message": "Course fee not found"}
    }
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
