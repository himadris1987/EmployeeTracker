import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <header>
    <nav id="navbars navbar-expand-lg navbar-light bg-light">
      <Link id="navbar-brand">
        Employee Tracker
      </Link>
      <div>
        <ul id="navbar-nav">
          <li id="nav-item">
            <Link id="links"
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link id="links"
              to="/search"
              className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
            >
              Search
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    </header>
  );
}

export default Navbar;
