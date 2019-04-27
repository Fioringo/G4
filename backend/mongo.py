import pymongo
from settings import mongodb

db = pymongo.MongoClient(mongodb)
