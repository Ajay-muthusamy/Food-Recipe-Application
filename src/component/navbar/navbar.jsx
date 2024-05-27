import React from "react";
import "../navbar/main.css";
import { Outlet, Link } from "react-router-dom";

const navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container text-white">
          <a class="navbar-brand text-white fs-3" href="#">
            {/* Foody */}
            <img
              src="https://www.foodygrocery.com/uploads/b/12c90fb61feda8cdc51385934696ac769233690ddce6973faba7b632e9a3cf39/Foody%20logo%20png%20with%20stroke2_1628835214.png?width=1200"
              style={{ width: "30%" }}
              alt=""
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a
                  class="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <Link to="/apirecipe" className="nav-link text-white">
                  Foody Recipes
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/user" className="nav-link text-white">
                  upload
                </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled text-white" aria-disabled="true">
                  Admin
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default navbar;
