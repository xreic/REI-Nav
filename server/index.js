const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const server = express();
const port = 3100;

const { Items, Users } = require('../database/database.js');

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());
server.use(morgan('dev'));
server.use(express.static(path.join(__dirname, '../client/dist')));

server.post('/api/searchbar', (req, res) => {
  console.log('-------- POST (Search Bar) REQUEST START --------');

  //prettier-ignore
  Items.find({})
    .then((searchResults) => res.status(200).send(searchResults).end())
    .catch((err) => res.status(400).send(err).end());
});

server.listen(port, () => console.log('Server initialized on port:', port));
