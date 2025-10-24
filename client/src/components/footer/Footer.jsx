import React from "react";
import { HeartPulse } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-logo">
        <HeartPulse className="footer-icon" />
        <span className="footer-text">HeartSense AI</span>
      </div>
      <p className="footer-copy">
        © {new Date().getFullYear()} HeartSense AI. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
