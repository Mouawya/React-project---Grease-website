import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";

const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <img className="logo" src={logo} alt="Logo" />
      </Link>

      <ul className="nav-list">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/courses">
          <li className="courses-navbar">Courses</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
