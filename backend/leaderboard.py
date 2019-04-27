from flask import Blueprint,request, session, jsonify, Response
import hashlib
from mongo import db
from bson import json_util
import json
import pymongo

leaderboard = Blueprint(__name__, "leaderboard")

@leaderboard.route("/api/leaderboard/add_points", methods=['GET', 'POST'])
def points_():

    client = db.vision
    data = request.get_json()

    points = data['points']
    user = data['user']

    check_user = client.leaderboard.find_one({"display_name": user})

    print(check_user)
    if check_user == None:
        client.leaderboard.insert({"display_name":user, "points":points})

    else:
        user_points = check_user['points']
        print(user_points)

        new_points = int(user_points) + int(points)
        client.leaderboard.update({"display_name": user}, {"$set": {"points": int(new_points)}}, upsert=False)
        # print(user_points)

        # update({'_id':mongo_id}, {"$set": post}, upsert=False)
    return "0"

@leaderboard.route("/api/leaderboard/list", methods=['GET', 'POST'])
def list_():
    points_obj = []
    client = db.vision
    results = list(client.leaderboard.find({},{ '_id': 0 }).sort( "points",pymongo.DESCENDING  ))

    print(results)
    return Response(
    json_util.dumps(results),
    mimetype='application/json'
)
