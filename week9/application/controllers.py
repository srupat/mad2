from flask import Flask, request
from flask import render_template
from flask import current_app as app
from application.models import Article
from flask_security import login_required, roles_required
from application import tasks
from datetime import datetime


@app.route("/", methods=["GET", "POST"])
def articles():
    articles = Article.query.all()    
    return render_template("articles.html", articles=articles)

@app.route("/articles_by/<user_name>", methods=["GET", "POST"])
@login_required
@roles_required('author')
def articles_by_author(user_name):
    articles = Article.query.filter(Article.authors.any(username=user_name))
    return render_template("articles_by_author.html", articles=articles, username=user_name)

@app.route('/feedback', methods = ["GET", "POST"])
@login_required
@roles_required('author')
def feedback():
    if request.method == "GET":
        return render_template("feedback.html", error = None)
    if request.method == "POST":
        form = request.form
        email = form["email"]
        print(form)
        if "@" in email:
            pass
        else:
            error = "Enter a valid email"
            return render_template("feedback.html", error = error)
        return render_template("thank_you.html")

@app.route("/article_like/<article_id>", methods = ["GET", "POST"])
def like(article_id):
    print("Article with article id {} was liked".format(article_id))
    return "OK", 200

@app.route("/hello/<string:user_name>", methods = ["GET", "POST"])
def hello(user_name):
    job = tasks.print_current_time_job.apply_async(countdown=10)
    result = job.wait()
    return str(result), 200
