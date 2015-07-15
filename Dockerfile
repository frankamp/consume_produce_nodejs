FROM node:0.10.38

RUN mkdir /src

RUN npm install nodemon -g

WORKDIR /src
ADD package.json /src/package.json
ADD consumer.js /src/consumer.js
ADD producer.js /src/producer.js
RUN npm install

EXPOSE 3000

CMD ["node", "consumer.js"]
