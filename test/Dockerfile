FROM node
ENV MONGO_DB_USERNAME=Admin \
  MONGO_DB_PWD=Prakash

  RUN mkdir -p test
  COPY . /test
  CMD ["node","/test/server.js"]
    