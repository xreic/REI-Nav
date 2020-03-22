const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const server = express();
const port = 3100;

const { Items, Users, Categories, Searches } = require('../database/database.js');

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());
server.use(morgan('dev'));
server.use(express.static(path.join(__dirname, '../client/dist')));

// Search bar queries
server.post('/api/searchbar/', (req, res) => {
  console.log('-------- Search bar queries --------');

  Items.find({ productName: { $regex : req.body.productName, $options: 'i' }}).sort({_id: -1}).limit(10)
    .then((result) => res.status(200).send(result).end())
    .catch((err) => res.status(400).send(err).end());
});

// Search bar history retrieval
server.get('/api/searchbar/history', (req, res) => {
  console.log('-------- Search bar history retrieval --------');

  Searches.find({}).sort({_id: -1}).limit(10)
    .then((result) => res.status(200).send(result).end())
    .catch((err) => res.status(400).send(err).end());
});

// Search bar history insertion
server.post('/api/searchbar/history', (req, res) => {
  console.log('-------- Search bar history retrieval and insertion --------');

  Searches.findOneAndUpdate(req.body, req.body, {upsert: true})
    .then((result) => res.status(200).send(result).end())
    .catch((err) => res.status(400).send(err).end());
});

// Search bar history clearing
server.delete('/api/searchbar/history', (req, res) => {
  console.log('-------- Search bar history clearing --------');

  Searches.remove({})
    .then((result) => res.status(200).send(result).end())
    .catch((err) => res.status(400).send(err).end());
});

// Category items retrieval
server.post('/api/navbar/', (req, res) => {
  console.log('-------- Category items retrieval --------');

  Categories.find(req.body)
    .then((result) => res.status(200).send(result).end())
    .catch((err) => res.status(400).send(err).end());
});

// Login authentication
server.post('/api/login/', (req, res) => {
  console.log('-------- Login authentication --------');

  Users.find(req.body)
    .then((result) => res.status(200).send(result).end())
    .catch((err) => res.status(400).send(err).end());
});

// Cart items retrieval
server.post('/api/cart/', (req, res) => {
  console.log('-------- Cart items retrieval --------');

  Items.find({ productID: { $in: req.body.items } })
    .then((result) => res.status(200).send(result).end())
    .catch((err) => res.status(400).send(err).end());
});

server.listen(port, () => console.log('Server initialized on port:', port));
