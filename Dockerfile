FROM node:12

RUN mkdir /src
WORKDIR /src

COPY package.json /src

RUN npm install
RUN npm run client:install
RUN npm run client:build
RUN npm run start

CMD [ "npm", "start" ]