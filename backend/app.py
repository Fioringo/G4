from flask import Flask, render_template, session, redirect
from login import login
from register import register
from leaderboard import leaderboard
from upload import upload

app = Flask(__name__)
app.secret_key = "bpV 2Q/sF&[D`2a1Z2-85q/{1]XRQZgWj3_q)P,=K2O9`B*RKjWiDp9P{F%WK7C"

app.debug = True
port = 5001

app.register_blueprint(register)
app.register_blueprint(login)
app.register_blueprint(leaderboard)
app.register_blueprint(upload)

@app.route("/logout/")
def logout():
    session.pop("login")
    return redirect("/")

@app.errorhandler(404)
def four0four(e):
    return "How did you get here?", 404

if __name__ == "__main__":
    app.run(port=port,debug=True)
