from flask import Flask, jsonify, request

app = Flask(__name__)

employees = [
    {
        "id": 1,
        "name": "Santhosh",
        "role": "Cloud Engineer"
    },
    {
        "id": 2,
        "name": "Ganesh",
        "role": "DevOps Engineer"
    }
]


@app.route("/")
def home():

    return "Employee Management API is running"


@app.route("/health")
def health():

    return jsonify({
        "status": "healthy"
    })


@app.route("/employees")
def get_employees():

    return jsonify(employees)


@app.route("/employees", methods=["POST"])
def add_employee():

    data = request.json

    employee = {
        "id": len(employees) + 1,
        "name": data["name"],
        "role": data["role"]
    }

    employees.append(employee)

    return jsonify(employee), 201


if __name__ == "__main__":

    app.run(
        host="0.0.0.0",
        port=5000
    )