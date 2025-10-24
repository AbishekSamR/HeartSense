import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.post("/api/predict", async (req, res) => {
  try {
    const response = await axios.post("http://127.0.0.1:5000/api/predict", {
      features: req.body.features,
    });
    res.status(200).send(response.data);
  } catch (error) {
    console.error("Prediction error:", error);
    res
      .status(500)
      .json({ message: "prediction failed", error: error.message });
  }
});

const port = process.env.PORT || 4000;

app.listen(port, async (req, res) => {
  try {
    console.log(`Server is running on Port ${port}`);
  } catch (error) {
    console.log(error);
  }
});
