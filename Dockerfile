FROM alpine:3.6

COPY . /react-app

RUN sudo apt-get nodejs

CMD ["npm","test"]

