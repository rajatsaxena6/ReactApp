# base image as alpine linux distribution. 
FROM alpine:3.6

# copied the current directory to the react-app in the container.
COPY . /react-app

# specified the working directory in the container.
WORKDIR /react-app

# updated the repos in the VM.
RUN sudo apt-get update

# installed the nodejs inside the container.
RUN sudo apt-get nodejs

# exposed the port 80 to outside container.
EXPOSE 80

# command to install all the dependencies.
RUN npm install

# the final command to run the test suite.
CMD ["npm","test"]

