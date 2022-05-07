FROM node:lts-alpine AS builder

COPY package.json .
COPY package-lock.json .

RUN npm install
COPY src/ src/
COPY public/ public/

RUN npm run build

FROM nginxinc/nginx-unprivileged

COPY --from=builder build/ /usr/share/nginx/html/
