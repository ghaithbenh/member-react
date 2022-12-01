import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <div className="home">
            <Link className="nav-link " to="/">
              Home
            </Link>
          </div>
        </li>
        <li className="nav-item">
          <div className="teams">
            <Link className="nav-link" to="/GroupedTeamMembers">
              Teams
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
