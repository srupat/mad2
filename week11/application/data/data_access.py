from application.data.models import Article
from application.data.models import ArticleLikes
from main import cache
from .database import db


@cache.cached(timeout=50, key_prefix='get_all_articles')
def get_all_articles():
    print("inside article")
    articles = Article.query.all()   
    print("--------------------------") 
    print(str(Article.query))
    print("--------------------------")
    return articles

@cache.memoize(50)
def get_articles_by_username(username):
    articles = Article.query.filter(Article.authors.any(username=username))
    print(str(articles))
    return articles.all()

def add_article_like(user_id, article_id):
    new_like = ArticleLikes(user_id=user_id, article_id=article_id)
    db.session.add(new_like)
    db.session.commit()
    return new_like
