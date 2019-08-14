FROM node:10-alpine
RUN mkdir -p /srv/app/server
WORKDIR /srv/app/server

COPY package.json /srv/app/server

RUN yarn install

COPY . /srv/app/server

CMD ["node", "node.js"]