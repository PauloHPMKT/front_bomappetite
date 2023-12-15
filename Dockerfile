FROM node:18-alpine

USER root

WORKDIR /home/project/app

COPY package*.json .

COPY . .

EXPOSE 3002