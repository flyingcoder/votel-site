FROM node:8.12.0-alpine

COPY . /app
WORKDIR /app

RUN apk update && apk upgrade
RUN apk --no-cache add --virtual .build-deps build-base python git
RUN yarn install --silent --ignore-engines
RUN apk del .build-deps
RUN yarn build

EXPOSE 3001
ENV HOST=0.0.0.0
CMD yarn start
