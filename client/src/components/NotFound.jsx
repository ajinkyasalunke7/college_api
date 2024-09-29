import React from "react";

const NotFound = () => {
  const notFoundStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    textAlign: "center",
    backgroundColor: "#f8f8f8",
    color: "#333",
    padding: "15px",
  };

  const headingStyle = {
    fontSize: "4rem",
    fontWeight: "bold",
  };

  const paragraphStyle = {
    margin: "20px 0",
    fontSize: "1.25rem",
  };

  const linkStyle = {
    display: "inline-block",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    textDecoration: "none",
    borderRadius: "5px",
  };

  return (
    <div style={notFoundStyle}>
      <div>
        <h1 style={headingStyle}>404</h1>
        <p style={paragraphStyle}>
          Oops! The page you are looking for does not exist.
        </p>
        <a href="/" style={linkStyle}>
          Go to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
