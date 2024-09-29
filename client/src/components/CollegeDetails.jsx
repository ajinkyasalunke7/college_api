import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

const CollegeDetails = () => {
  const { id } = useParams();
  const [college, setCollege] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:5000/college/${id}`)
      .then((response) => {
        // console.log(response.data);
        setCollege(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to load college details.");
        setLoading(false);
      });
  }, [id]);

  // if (loading) {
  //   return <div className="loading-message">Loading college details...</div>;
  // }
  if (loading) {
    return <Loader msg={"Loading college details..."} />; // Use the Loader component while loading
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="college-details-container">
      <h2 className="college-name">{college.college.name}</h2>
      <div className="college-details">
        <p>
          <strong>Course:</strong> {college.college.course_name}
        </p>
        <p>
          <strong>Duration:</strong> {college.college.duration}
        </p>
        <p>
          <strong>Accommodation:</strong> {college.college.accommodation_type}
        </p>
        <p>
          <strong>Course Fee:</strong> {college.course_fees.course_fee}
        </p>
        <p>
          <strong>Accommodation Fee:</strong>{" "}
          {college.course_fees.accommodation_fee}
        </p>
      </div>
    </div>
  );
};

export default CollegeDetails;
