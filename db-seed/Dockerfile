FROM node:12-stretch

RUN mkdir /home/db-seed
WORKDIR /home/db-seed
COPY --chown=node:node . .

RUN npm install

USER node

CMD [ "npm", "start" ]