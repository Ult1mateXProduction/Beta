FROM alpine:latest

WORKDIR /home/app

RUN apk add --no-cache --upgrade bash
RUN apk add --no-cache npm
RUN apk add --no-cache yarn

COPY . .

RUN yarn install

EXPOSE 80

CMD ["yarn", "serve"]