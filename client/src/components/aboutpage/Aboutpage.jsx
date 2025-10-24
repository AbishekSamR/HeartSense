import React from "react";
import { Database, Cpu, TrendingUp, HeartIcon } from "lucide-react";
import "./Aboutpage.css"; // Import the separate CSS file

const Aboutpage = () => {
  return (
    <div id="about" className="about-page">
      <div className="about-container">
        <div className="heart-icon-container">
          <HeartIcon className="heart-icon" />
        </div>

        <div className="about-header">
          <h2 className="about-title">
            How HeartSense Works: Powered by XGBoost
          </h2>
          <p className="about-description">
            Our heart disease predictor leverages the XGBoost machine learning
            algorithm to analyze health data and provide accurate risk
            assessments. Discover the science behind our AI-driven predictions.
          </p>
        </div>

        {/* Step-by-Step Process Visualization */}
        <div className="about-process">
          <h3 className="about-process-title">The Prediction Process</h3>
          <div className="about-steps">
            <div className="about-step">
              <div className="about-step-icon">
                <Database className="about-icon about-icon-blue" />
              </div>
              <h4 className="about-step-title">Data Collection</h4>
              <p className="about-step-description">
                Gather anonymized health metrics like age, blood pressure,
                cholesterol, and heart rate from users.
              </p>
            </div>
            <div className="about-step-arrow">→</div>
            <div className="about-step">
              <div className="about-step-icon">
                <Cpu className="about-icon about-icon-purple" />
              </div>
              <h4 className="about-step-title">XGBoost Processing</h4>
              <p className="about-step-description">
                Our XGBoost model processes the data using gradient boosting to
                identify patterns and calculate risk scores.
              </p>
            </div>
            <div className="about-step-arrow">→</div>
            <div className="about-step">
              <div className="about-step-icon">
                <TrendingUp className="about-icon about-icon-green" />
              </div>
              <h4 className="about-step-title">Risk Assessment</h4>
              <p className="about-step-description">
                Receive instant predictions with personalized recommendations
                for a healthier heart.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
