FROM node:12-stretch

RUN npm i -g nodemon

RUN mkdir /home/react-app
WORKDIR /home/react-app
COPY --chown=node:node . .

EXPOSE 3100

RUN npm install

USER node

CMD [ "npm", "start" ]