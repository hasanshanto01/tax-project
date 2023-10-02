import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h2 className="text-red-500">404 ! NOT FOUND</h2>
      <Link to="/" className="btn btn-success">
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
