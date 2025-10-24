import React from "react";
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
import "./Prediction.css";
import { useState } from "react";
import axios from "axios";
import Result from "../result/Result";
import { Link } from "react-scroll";

const Prediction = () => {
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    chestPain: "",
    bp: "",
    cholesterol: "",
    bloodSugar: "",
    heartRate: "",
  });
  const [prediction, setPrediction] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const serverURL = process.env.SERVER_URL;

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const numericFeatures = Object.values(formData).map(Number);
      const res = await axios.post(`${serverURL}/api/predict`, {
        features: numericFeatures,
      });
      setPrediction(res.data.prediction);
      setShowResult(true);
      setTimeout(() => {
        const resultSection = document.getElementById("predict");
        if (resultSection) {
          resultSection.scrollIntoView({ behavior: "smooth", block: "end" });
        }
      }, 300);
    } catch (error) {
      alert("Error occured : " + error);
    }
  };

  const handleReset = () => {
    setFormData({
      age: "",
      gender: "",
      chestPain: "",
      bp: "",
      cholesterol: "",
      bloodSugar: "",
      heartRate: "",
    });
    setPrediction(null);
    setShowResult(false);
  };

  return (
    <div id="predict" className="prediction-page">
      <div className="prediction-container">
        <div className="prediction-header">
          <h2 className="prediction-title">Enter Your Health Data</h2>
          <p className="prediction-description">
            Our AI algorithm analyzes your health metrics to provide
            personalized heart disease risk assessment
          </p>
        </div>
        <form onSubmit={handleSubmit} className="form-container">
          <div className="input-grid">
            {/* Age */}
            <div className="input-card">
              <div className="icon-container">
                <div className="icon-bg-blue">
                  <Clock className="prediction-icon icon-blue" />
                </div>
                <label htmlFor="age" className="input-label">
                  Age
                </label>
              </div>
              <input
                type="number"
                id="age"
                value={formData.age}
                onChange={handleChange}
                className="input-field"
                placeholder="Years"
                required
              />
            </div>
            {/* Gender */}
            <div className="input-card">
              <div className="icon-container">
                <div className="icon-bg-red">
                  <VenusAndMars className="prediction-icon icon-red" />
                </div>
                <label htmlFor="gender" className="input-label">
                  Gender
                </label>
              </div>
              <select
                id="gender"
                className="input-field"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="1">Male</option>
                <option value="0">Female</option>
              </select>
            </div>
            {/* Chest Pain Type */}
            <div className="input-card">
              <div className="icon-container">
                <div className="icon-bg-yellow">
                  <Stethoscope className="prediction-icon icon-yellow" />
                </div>
                <label htmlFor="chestPain" className="input-label">
                  Chest pain type
                </label>
              </div>
              <select
                id="chestPain"
                className="input-field"
                value={formData.chestPain}
                onChange={handleChange}
                required
              >
                <option value="">Select type</option>
                <option value="1">typical</option>
                <option value="2">typical angina</option>
                <option value="3">non-anginal</option>
                <option value="4">asymptomatic</option>
              </select>
            </div>
            {/* Blood Pressure */}
            <div className="input-card">
              <div className="icon-container">
                <div className="icon-bg-red">
                  <Activity className="prediction-icon icon-red" />
                </div>
                <label htmlFor="bp" className="input-label">
                  Blood Pressure
                </label>
              </div>
              <input
                type="number"
                id="bp"
                className="input-field"
                placeholder="120/80 mmHg"
                value={formData.bp}
                onChange={handleChange}
                required
              />
            </div>
            {/* Cholesterol */}
            <div className="input-card">
              <div className="icon-container">
                <div className="icon-bg-yellow">
                  <Droplets className="prediction-icon icon-yellow" />
                </div>
                <label htmlFor="cholesterol" className="input-label">
                  Cholesterol
                </label>
              </div>
              <input
                type="number"
                id="cholesterol"
                className="input-field"
                placeholder="mg/dL"
                value={formData.cholesterol}
                onChange={handleChange}
                required
              />
            </div>
            {/* Blood Sugar */}
            <div className="input-card">
              <div className="icon-container">
                <div className="icon-bg-orange">
                  <Thermometer className="prediction-icon icon-orange" />
                </div>
                <label htmlFor="bloodSugar" className="input-label">
                  Blood Sugar
                </label>
              </div>
              <select
                id="bloodSugar"
                className="input-field"
                value={formData.bloodSugar}
                onChange={handleChange}
                required
              >
                <option value="">Select Level</option>
                <option value="1">Above 120 </option>
                <option value="0">Below 120</option>
              </select>
            </div>
            {/* Heart Rate */}
            <div className="input-card">
              <div className="icon-container">
                <div className="icon-bg-red">
                  <Heart className="prediction-icon icon-red" />
                </div>
                <label htmlFor="heartRate" className="input-label">
                  Heart Rate
                </label>
              </div>
              <input
                type="number"
                id="heartRate"
                className="input-field"
                placeholder="BPM"
                value={formData.heartRate}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="button-container">
            <button
              type="submit"
              className="predict-button"
              onClick={() => {
                document
                  .getElementById("result")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Predict Now
              <ChevronRight className="chevron" />
            </button>
          </div>
        </form>
      </div>
      {showResult && (
        <Result
          prediction={prediction}
          formData={formData}
          onReset={handleReset}
        />
      )}
    </div>
  );
};

export default Prediction;
