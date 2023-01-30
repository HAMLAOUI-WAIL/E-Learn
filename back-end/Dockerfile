FROM python:3.10
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED=1

WORKDIR /back-end
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
RUN python manage.py makemigrations
RUN python manage.py migrate

COPY . .

EXPOSE 8000 
CMD [ "python","manage.py","runserver" ]
# CMD gunicorn -b 0.0.0.0:8000 --worker-class=gevent --worker-connections=1000 --workers=5 backend.wsgi