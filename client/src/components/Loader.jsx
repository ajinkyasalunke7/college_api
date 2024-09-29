// Loader.js
import React from "react";
import "./Loader.css"; // Import the loader styles

const Loader = ({ msg }) => {
  return (
    <div className="loader">
      <div className="spinner"></div>
      <p>{msg}</p>
    </div>
  );
};

export default Loader;
