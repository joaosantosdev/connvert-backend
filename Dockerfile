FROM node:alpine

WORKDIR /usr

COPY ./src ./src

COPY ./package*.json ./

RUN yarn install

RUN yarn build

COPY ./ ./
COPY ./.env ./dist

ENV MONGO_URL_DB=mongodb://db:27017/connvertdb

EXPOSE 9999

CMD ["yarn","start"]
