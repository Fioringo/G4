from flask import Blueprint,request, session, jsonify
import hashlib
from mongo import db

login = Blueprint(__name__, "login")

@login.route("/api/login/", methods=['GET', 'POST'])
def login_():


    client = db.vision
    message = ""
    response = {}
    data = request.get_json()
    email = data['email']
    password = data['password']

    hash_password = hash_password = hashlib.sha256(password.encode()).hexdigest()

    check = client.members.find({"email":email, "password": hash_password})

    if check.count() > 0:
        response['message'] = "Success"
        response['status'] = "200"
    else:
        response['message'] = "Login failed"
        response['status'] = "400"

    return jsonify(response)
