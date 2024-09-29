import React from "react";
import { Link } from "react-router-dom";
import "./CollegeItem.css"; // Import the CSS file

const CollegeItem = ({ college }) => {
  return (
    <Link to={`/college/${college.id}`} className="college-item">
      <div className="college-content">
        <h3 className="college-name">{college.name}</h3>
        <p className="college-details">
          <span className="detail-label">ID:</span> {college.id}
        </p>
        <p className="college-details">
          <span className="detail-label">Course Name:</span>{" "}
          {college.course_name}
        </p>
        <p className="college-details">
          <span className="detail-label">Course Duration:</span>{" "}
          {college.duration}
        </p>
      </div>
    </Link>
  );
};

export default CollegeItem;
