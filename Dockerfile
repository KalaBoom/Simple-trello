FROM node:12

RUN mkdir /src
WORKDIR /src

COPY package.json /src

RUN npm install

CMD [ "npm", "start" ]