FROM node:lts-alpine AS builder

COPY package.json .
COPY package-lock.json .

RUN npm install
COPY src/ src/
COPY public/ public/

RUN npm run build

FROM nginx:alpine

COPY build/ /usr/share/nginx/html/
