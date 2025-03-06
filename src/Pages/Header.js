import React from "react";
import { Link, Links } from "react-router-dom";

// Css
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav>
        <div id="leftLink">Saad Shaikh</div>
        <div id="centerLink">
          <Link to={"/"} class="centerLink"> Home </Link>
          <Link to={"/table"} class="centerLink"> Table </Link>
          <Link to={"/"} class="centerLink"> Day-3 </Link>
          <Link to={"/"} class="centerLink"> Day-4 </Link>
        </div>
        <a href="https://chat.openai.com/" target="_blank" id="rightLink">
          Learn More
        </a>
      </nav>
    </div>
  );
};

export default Header;
