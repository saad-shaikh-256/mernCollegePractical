import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Importing Bootstrap CSS

const Footer = () => {
  return (
    <footer className=" text-white py-4" style={{ backgroundColor: "#6e6cdf" }}>
      <div className="container">
        <div className="row">

          <div className="col-md-4 d-flex flex-column align-items-center mb-4">
            <h5 className="fs-6">Quick Links</h5>
            <div className="d-flex flex-column">
              <Link to="/" className="text-white mb-2 fs-6 text-decoration-none">Home</Link>
              <Link to="/table" className="text-white mb-2 fs-6 text-decoration-none">Table</Link>
              <Link to="/counter" className="text-white mb-2 fs-6 text-decoration-none">Counter</Link>
              <Link to="/calculator" className="text-white mb-2 fs-6 text-decoration-none">Calculator</Link>
            </div>
          </div>

          <div className="col-md-4 d-flex flex-column align-items-center mb-4">
            <h5 className="fs-6">Quick Links</h5>
            <div className="d-flex flex-column">
              <Link to="/" className="text-white mb-2 fs-6 text-decoration-none">Home</Link>
              <Link to="/table" className="text-white mb-2 fs-6 text-decoration-none">Table</Link>
              <Link to="/counter" className="text-white mb-2 fs-6 text-decoration-none">Counter</Link>
              <Link to="/calculator" className="text-white mb-2 fs-6 text-decoration-none">Calculator</Link>
            </div>
          </div>

          <div className="col-md-4 d-flex flex-column align-items-center mb-4">
            <h5 className="fs-6">Quick Links</h5>
            <div className="d-flex flex-column">
              <Link to="/" className="text-white mb-2 fs-6 text-decoration-none">Home</Link>
              <Link to="/table" className="text-white mb-2 fs-6 text-decoration-none">Table</Link>
              <Link to="/counter" className="text-white mb-2 fs-6 text-decoration-none">Counter</Link>
              <Link to="/calculator" className="text-white mb-2 fs-6 text-decoration-none">Calculator</Link>
            </div>
          </div>

        </div>
      </div>

      <div className="text-center py-2 mt-4">
        <p className="mb-0 fs-6">Copyright © 2025 My Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
