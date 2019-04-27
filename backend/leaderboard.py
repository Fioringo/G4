from flask import Blueprint,request, session, jsonify
import hashlib
from mongo import db

leaderboard = Blueprint(__name__, "leaderboard")

@leaderboard.route("/api/leaderboard/add_points", methods=['GET', 'POST'])
def points_():
    return "0"
    
@leaderboard.route("/api/leaderboard/list", methods=['GET', 'POST'])
def list_():
    return "0"
