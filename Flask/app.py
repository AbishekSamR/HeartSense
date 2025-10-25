from flask import Flask , request , jsonify
import joblib
import numpy as np
import warnings

warnings.filterwarnings("ignore")

app = Flask(__name__)

model = joblib.load('heart_model.joblib')
scaler = joblib.load("scaler.joblib")

@app.route('/')
def main():
    return "Server is running..."


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
    app.run(host='0.0.0.0',debug=True)




# import joblib
# import numpy as np
# import json

# model = joblib.load("heart_model.joblib")
# scaler = joblib.load("scaler.joblib")


# def handler(request):
#     try:
#         # Vercel passes request body as JSON
#         data = json.loads(request.body)
#         features = np.array(data["features"], dtype=float).reshape(1, -1)
#         scaled = scaler.transform(features)
#         prediction = int(model.predict(scaled)[0])
#         return {
#             "statusCode": 200,
#             "body": json.dumps({"prediction": prediction})
#         }
#     except Exception as e:
#         return {
#             "statusCode": 500,
#             "body": json.dumps({"message": "prediction failed", "error": str(e)})
#         }
