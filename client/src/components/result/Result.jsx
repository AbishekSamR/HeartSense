import React from "react";
import "./Result.css";
import {
  Activity,
  Thermometer,
  Heart,
  Droplets,
  Clock,
  ChevronRight,
  VenusAndMars,
  Stethoscope,
} from "lucide-react";
import { Link } from "react-scroll";

const Result = ({ prediction, formData, onReset }) => {
  const chestPainData = [
    "",
    "Typical",
    "Typical angina",
    "Non-anginal",
    "Asymptomatic",
  ];
  const genderData = ["Female", "Male"];
  const bloodSugarData = ["Below 120 mg/dl", "Above 120 mg/dl"];

  const predictValue = prediction === 0 ? "Low Risk Detected" : "Risk Detected";

  return (
    <>
      <div id="result" className="result-page">
        <div className="card risk-card">
          <h3>❤️ Risk Assessment</h3>
          <div className="risk-level">
            <span className={`badge ${prediction === 0 ? "low" : "high"}`}>
              {predictValue}
            </span>
          </div>

          <div className="assessment">
            <div className="result-icon-container">
              <div className="result-icon-bg-blue">
                <Clock className="prediction-icon icon-blue" />
              </div>
              <label className="result-input-label">
                Age: <span>{formData.age}</span>
              </label>
            </div>

            <div className="result-icon-container">
              <div className="result-icon-bg-red">
                <VenusAndMars className="prediction-icon icon-red" />
              </div>
              <label className="result-input-label">
                Gender: <span>{genderData[formData.gender]}</span>
              </label>
            </div>

            <div className="result-icon-container">
              <div className="result-icon-bg-yellow">
                <Stethoscope className="prediction-icon icon-yellow" />
              </div>
              <label className="result-input-label">
                Chest pain type:{" "}
                <span>{chestPainData[formData.chestPain]}</span>
              </label>
            </div>

            <div className="result-icon-container">
              <div className="result-icon-bg-orange">
                <Thermometer className="prediction-icon icon-orange" />
              </div>
              <label className="result-input-label">
                Blood Sugar: <span>{bloodSugarData[formData.bloodSugar]}</span>
              </label>
            </div>
          </div>
        </div>

        <div className="card metrics-card">
          <h3>📊 Health Metrics</h3>

          <div className="metric">
            <label>
              Blood Pressure <span>{formData.bp} mmHg</span>
            </label>
            <div
              className="bar blue"
              style={{ width: `${Math.min(formData.bp / 2, 100)}%` }}
            ></div>
          </div>

          <div className="metric">
            <label>
              Cholesterol <span>{formData.cholesterol} mg/dL</span>
            </label>
            <div
              className="bar yellow"
              style={{ width: `${Math.min(formData.cholesterol / 3, 100)}%` }}
            ></div>
          </div>

          <div className="metric">
            <label>
              Heart Rate <span>{formData.heartRate} BPM</span>
            </label>
            <div
              className="bar orange"
              style={{
                width: `${Math.min((formData.heartRate / 220) * 100, 100)}%`,
              }}
            ></div>
          </div>

          <div className="note">
            ℹ️ Based on your results, we recommend consulting a doctor for
            detailed advice.
          </div>
        </div>
      </div>

      <div className="again-btn-container">
        <Link to="predict" smooth={true} duration={500}>
          <button id="again-btn" onClick={onReset} className="again-btn">
            Predict Again
          </button>
        </Link>
      </div>
    </>
  );
};

export default Result;
