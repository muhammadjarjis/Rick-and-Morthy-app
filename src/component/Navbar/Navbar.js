import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../../App.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light mb-4">
      <div className="container">
        <Link to="/" className="fs-3 ubuntu navbar-brand">
          Rick & Morthy <span className="text-primary">App</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <style jsx="true">
            {`
              button[aria-expanded="false"] > .close {
                display: none;
              }

              button[aria-expanded="true"] > .open {
                display: none;
              }
            `}
          </style>

          <i className="fa-solid fa-bars open fw-bold text-dark"></i>
          <i className="fa-solid fa-xmark close fw-bold text-dark"></i>
        </button>
        <div className="collapse navbar-collapse justify-content-end text-center" id="navbarNavAltMarkup">
          <div className="navbar-nav fs-5">
            <NavLink activeclassname="active" to="/" className="nav-link">
              Character
            </NavLink>
            <NavLink to="/location" className="nav-link">
              Location
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
