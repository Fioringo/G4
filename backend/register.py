from flask import Blueprint,request, session, jsonify
import hashlib
from mongo import db

register = Blueprint(__name__, "register")

@register.route("/api/register", methods=['GET', 'POST'])
def register_():
    client = db.vision
    message = ""
    response = {}
    data = request.get_json()
    email = data['email']
    password = data['password']
    display = data['display_name']
    # print(data.email)
    check = client.members.find({"email":email})

    if check.count() > 0:
        response['message'] = "Email already taken."
        response['status'] = "Failed"

    else:
        hash_password = hashlib.sha256(password.encode()).hexdigest()
        client.members.insert({"email":email, "password":hash_password, "display_name":display})
        response['message'] = "Success"
        response['status'] = "Success"

    return jsonify(response)
