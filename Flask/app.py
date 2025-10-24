from flask import Flask , request , jsonify
import joblib
import numpy as np

app = Flask(__name__)

model = joblib.load('heart_model.joblib')
scaler = joblib.load("scaler.joblib")


@app.route("/api/predict",methods=["POST"])
def predict():
    try:
        data = request.json
        features = np.array(data["features"]).reshape(1,-1)
        scaled = scaler.transform(features)
        prediction = int(model.predict(scaled)[0])
        return jsonify({"prediction" : prediction})
    except Exception as e:
        return jsonify({"message": "prediction failed", "error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)



# from flask import Flask, request, jsonify
# import joblib
# import numpy as np
# import pandas as pd

# app = Flask(__name__)

# model = joblib.load("heart_model.joblib")
# scaler = joblib.load("scaler.joblib")

# # 👇 MUST be the same order as training!
# feature_names = ["age", "gender", "chestPain", "bp", "cholesterol", "bloodSugar", "heartRate"]

# @app.route("/api/predict", methods=["POST"])
# def predict():
#     try:
#         data = request.json
#         features = np.array(data["features"]).reshape(1, -1)

#         # ✅ Convert to DataFrame with column names to avoid warning and mis-scaling
#         df = pd.DataFrame(features, columns=feature_names)

#         scaled = scaler.transform(df)
#         prediction = int(model.predict(scaled)[0])
#         return jsonify({"prediction": prediction})
#     except Exception as e:
#         return jsonify({"message": "prediction failed", "error": str(e)}), 500

# if __name__ == "__main__":
#     app.run(port=5000)
