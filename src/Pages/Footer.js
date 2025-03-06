import React from "react";
import { Link, Links } from "react-router-dom";

// CSS
import "./Footer.css"

const Footer = () => {
  return (
    <div>
      <footer>
        <div class="upperContainer">
          <div class="leftColumn">
            Designed by
            <a href="https://www.linkedin.com/in/saad-shaikh256/">
              Saad Shaikh
            </a>
          </div>
          <div class="centerColumn">
            <h1>Quick Links</h1>
            <div class="Links">
              <Link to={"/"} class="centerLink">
                {" "}
                Home{" "}
              </Link>
              <Link to={"/table"} class="centerLink">
                {" "}
                Table{" "}
              </Link>
              <Link to={"/"} class="centerLink">
                {" "}
                Day-3{" "}
              </Link>
              <Link to={"/"} class="centerLink">
                {" "}
                Day-4{" "}
              </Link>
            </div>
          </div>
          <div class="centerColumn">
            <h1>Quick Links</h1>
            <div class="Links">
              <Link to={"/"} class="centerLink">
                {" "}
                Home{" "}
              </Link>
              <Link to={"/"} class="centerLink">
                {" "}
                Table{" "}
              </Link>
              <Link to={"/"} class="centerLink">
                {" "}
                Day-3{" "}
              </Link>
              <Link to={"/"} class="centerLink">
                {" "}
                Day-4{" "}
              </Link>
            </div>
          </div>
          <div class="rightColumn">
            <h1>Connect with Me</h1>
            <div class="rightLink">
              <a href="">linkedin</a>
              <a href="">Github</a>
            </div>
          </div>
        </div>
        <div class="bottomContainer">
          <h1>Copyright © 2025 My Website. All rights reserved.</h1>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
