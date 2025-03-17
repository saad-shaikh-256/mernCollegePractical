import React from "react";
import { Link } from "react-router-dom";

// Css
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light py-4 text-black" style={{ backgroundColor: "transparent", paddingLeft: "48px", paddingRight: "48px" }}>
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand font-weight-bold" style={{ color: "#6e6cdf", fontSize: "1.2rem", fontWeight: "600" }}>
            Saad Shaikh
          </Link>

          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={"/table"} className="nav-link text-black" style={{ opacity: 0.8, fontSize: "1rem" }}>
                  Table
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/localStorage"} className="nav-link text-black" style={{ opacity: 0.8, fontSize: "1rem" }}>
                  localStorage
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/calculator"} className="nav-link text-black" style={{ opacity: 0.8, fontSize: "1rem" }}>
                  Calculator
                </Link>
              </li>
            </ul>
          </div>

          <div className="d-flex" style={{ gap: 10 }}>
            <a
              href="https://chat.openai.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-dark"
              style={{ fontSize: "0.9rem", borderColor: "#6e6cdf", background: "#6e6cdf", color: "#ffffff" }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "#6e6cdf";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#6e6cdf";
                e.target.style.color = "#ffffff";
              }}
            >
              Learn More
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
