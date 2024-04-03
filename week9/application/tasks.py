from application.workers import celery
from datetime import datetime

@celery.task()
def print_current_time_job():
    print("Start")
    now = datetime.now()
    print("now =", now)
    dt_string = now.strftime("%d/%m/%Y %H:%M:%S")
    print("date and time =", dt_string)
    print("complete")