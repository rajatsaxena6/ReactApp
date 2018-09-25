# base image as alpine node linux distribution. 
FROM mhart/alpine-node:8

# copied the current directory to the react-app in the container.
RUN mkdir react-app

# specified the working directory in the container.
WORKDIR /react-app

# command to install all the dependencies.
RUN npm install

# exposed the port 80 to outside world
EXPOSE 80

# the final command to run the test suite.
CMD ["npm","test"]

