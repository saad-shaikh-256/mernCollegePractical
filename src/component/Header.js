import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Student from "./Student";

const Header = () => {
   return (
      
     <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
        <div class="container">
           <a class="navbar-brand d-flex align-items-center" href="#">
              <svg class="bi me-2" width="32" height="32" fill="currentColor">
              </svg>
              <span class="fw-bold">Saad Shaikh</span>
           </a>

           <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
              <span class="navbar-toggler-icon"></span>
           </button>

           <div class="collapse navbar-collapse" id="navbarContent">
              <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                 <li class="nav-item mx-2">
                    <Link to={'/'} class="nav-link active" aria-current="page" href="#">
                       <i class="bi bi-house-door me-1"></i>
                       Home
                    </Link>
                 </li>
                 <Link to={'/student'} class="nav-item mx-2">
                    <a class="nav-link" href="#">
                       <i class="bi bi-info-circle me-1"></i>
                       Student
                    </a>
                 </Link>
                 <li class="nav-item mx-2">
                    <Link to={'profile'} class="nav-link" href="#">
                       <i class="bi bi-envelope me-1"></i>
                       Profile
                    </Link>
                 </li>
              </ul>

              <div class="d-lg-flex">
                 <a class="btn btn-outline-light" href="#">
                    <i class="bi bi-box-arrow-right me-1"></i>
                    Download CV
                 </a>
              </div>
           </div>
        </div>
     </nav>

  );
};

export default Header;
