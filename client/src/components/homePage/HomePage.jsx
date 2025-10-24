import React from "react";
import { BrainCircuit, HeartPulse, ChevronRight } from "lucide-react";
import "./Homepage.css";
import { Link } from "react-scroll";

const HomePage = () => {
  return (
    <div id="home" className="hero-section">
      <div className="hero-container">
        {/* Left content */}
        <div className="left-content">
          <div className="home-badge">
            <HeartPulse className="homepage-icon" />
            <span className="badge-text">AI-Powered Health Insights</span>
          </div>
          <h1 className="hero-title">
            Predict Heart Disease Risk Instantly with AI
          </h1>
          <p className="hero-description">
            Enter your health data and get AI-powered predictions and tips for a
            healthier life.
          </p>
          <div className="buttons ">
            <Link to="predict" smooth={true} duration={500} offset={-100}>
              <button className="btn-primary">
                Start Prediction
                <ChevronRight className="chevron " />
              </button>
            </Link>
            {/* <button className="btn-secondary">Learn More</button> */}
          </div>
        </div>
        {/* Right content - illustration */}
        <div className="right-content">
          <div className="illustration ">
            <div className="circle-blue"></div>
            <div className="circle-green"></div>
            <div className="card">
              <div className="card-header">
                <BrainCircuit className="icon-large" />
                <h3 className="card-title">AI Analysis</h3>
              </div>
              <div className="bars">
                <div className="bar">
                  <div className="bar-fill-red"></div>
                </div>
                <div className="bar">
                  <div className="bar-fill-blue"></div>
                </div>
                <div className="bar">
                  <div className="bar-fill-green"></div>
                </div>
              </div>
              <div className="score-section">
                <div className="score-header">
                  <span className="score-label">Heart Health Score</span>
                  <span className="score-value">84%</span>
                </div>
                <div className="score-bar">
                  <div className="score-fill"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
