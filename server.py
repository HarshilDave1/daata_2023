from flask import Flask, request, jsonify
from chat import respond

app = Flask(__name__)

@app.route("/api/chat", methods=["POST"])
def chat():
    data = request.get_json()
    input = data.get("input")
    response = respond(input)
    return jsonify({"response": response})

if __name__ == "__main__":
    app.run()
