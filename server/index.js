const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const server = express();
const port = 3100;

const Items = require('../database/database.js');

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());
server.use(morgan('dev'));
server.use(express.static(path.join(__dirname, '/client/dist')));

server.post('/api/searchbar', (req, res) => {
  console.log('-------- POST (Search Bar) REQUEST START --------');
  console.log(req.body);
  console.log('-------- POST (Search Bar) REQUEST END --------');
});

server.listen(port, () => console.log('Server initialized on port:', port));
