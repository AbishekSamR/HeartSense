import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { HeartPulse } from "lucide-react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <HeartPulse className="icon" />
        <span className="logo-text">HeartSense</span>
      </div>
      <div className="menu">
        {["Home", "About", "Predict", "Contact"].map((section) => (
          <Link
            key={section}
            to={section.toLowerCase()}
            smooth={true}
            duration={500}
            spy={true}
            offset={-100}
            activeClass="active"
            className="menu-button"
          >
            {section}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
