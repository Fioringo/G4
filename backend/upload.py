import os
from flask import Flask, request, Blueprint
from werkzeug.utils import secure_filename

upload = Blueprint(__name__, "upload")

ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@upload.route("/api/upload", methods=['GET', 'POST'])
def upload_():

    message = ""
    if request.method == 'POST':
        # check if the post request has the file part
        if 'file' not in request.files:
            message = 'No file part'
        file = request.files['file']
        if file.filename == '':
            message = 'No file selected for uploading'
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join("upload", filename))
            message = 'Success'

    return message
