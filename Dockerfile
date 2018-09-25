FROM alpine:3.6

COPY . /react-app

WORKDIR /react-app

RUN sudo apt-get update

RUN sudo apt-get nodejs

EXPOSE 80

CMD ["npm","test"]

