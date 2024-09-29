import React, { useEffect, useState } from "react";
import axios from "axios";
import CollegeItem from "./CollegeItem"; // Import the CollegeItem component
import Loader from "./Loader"; // Import the Loader component

const CollegeList = () => {
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/colleges");
        setColleges(response.data);
        // console.log(response.data);
      } catch (error) {
        setError("Failed to load data.");
      } finally {
        setLoading(false);
      }
    };

    fetchColleges();
  }, []);

  if (loading) {
    return <Loader msg={"Loading college list..."} />; // Use the Loader component while loading
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="college-list-container">
      <h1 className="college-list-title">College List</h1>
      {colleges.length > 0 ? (
        <div className="college-item-list">
          {" "}
          {/* Change this to a div for Flexbox */}
          {colleges.map((college) => (
            <CollegeItem key={college.id} college={college} />
          ))}
        </div>
      ) : (
        <div className="no-data-message">No colleges found.</div>
      )}
    </div>
  );
};

export default CollegeList;
