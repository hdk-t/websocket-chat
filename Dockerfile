FROM node

WORKDIR /opt

RUN npm i -g http-server ts-node forever
