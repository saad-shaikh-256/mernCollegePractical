import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-light py-5 align-bottom">
      <div className="container">
        <div className="row">
          {/* Column for Copyright and About */}
          <div className="col-lg-4">
            <p className="mb-0">© 2025 Saad Shaikh. All rights reserved.</p>
            <p className="mt-2">
              Saad Shaikh is a passionate developer with a focus on frontend
              technologies and user experience.
            </p>
          </div>

          {/* Column for Navigation Links */}
          <div className="col-lg-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-light">
                  <i className="bi bi-house-door me-1"></i>Home
                </Link>
              </li>
              <li>
                <Link to="/student" className="text-light">
                  <i className="bi bi-person me-1"></i>Student
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-light">
                  <i className="bi bi-person-circle me-1"></i>Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Column for Social Media Links */}
          <div className="col-lg-4">
            <h5>Connect with Me</h5>
            <ul className="list-unstyled d-flex">
              <li className="mx-2">
                <a
                  href="https://www.linkedin.com"
                  className="text-light"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-linkedin me-1"></i>LinkedIn
                </a>
              </li>
              <li className="mx-2">
                <a
                  href="https://github.com"
                  className="text-light"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-github me-1"></i>GitHub
                </a>
              </li>
              <li className="mx-2">
                <a
                  href="https://twitter.com"
                  className="text-light"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-twitter me-1"></i>Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container mt-3">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <ul className="list-unstyled d-flex justify-content-center">
              <li className="mx-2">
                <Link to="/" className="text-light">
                  Privacy Policy
                </Link>
              </li>
              <li className="mx-2">
                <Link to="/" className="text-light">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
