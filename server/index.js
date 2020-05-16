const express = require('express');
const cors = require('cors');
const path = require('path');

const server = express();
const port = 3100;

const {
  Items,
  Users,
  Categories,
  Searches
} = require('../database/database.js');

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());
server.use(express.static(path.join(__dirname, '../client/dist')));

// Search bar queries
server.post('/api/searchbar/', (req, res) => {
  Items.find({ productName: { $regex: req.body.productName, $options: 'i' } })
    .sort({ _id: -1 })
    .limit(10)
    .then((result) => res.status(200).send(result).end())
    .catch((err) => res.status(400).send(err).end());
});

// Search bar history retrieval
server.get('/api/searchbar/history', (req, res) => {
  Searches.find({})
    .sort({ _id: -1 })
    .limit(10)
    .then((result) => res.status(200).send(result).end())
    .catch((err) => res.status(400).send(err).end());
});

// Search bar history insertion
server.post('/api/searchbar/history', (req, res) => {
  Searches.findOneAndUpdate(req.body, req.body, { upsert: true })
    .then((result) => res.status(200).send(result).end())
    .catch((err) => res.status(400).send(err).end());
});

// Search bar history clearing
server.delete('/api/searchbar/history', (req, res) => {
  Searches.remove({})
    .then((result) => res.status(200).send(result).end())
    .catch((err) => res.status(400).send(err).end());
});

// Category items retrieval
server.post('/api/navbar/', (req, res) => {
  Categories.find(req.body)
    .then((result) => res.status(200).send(result).end())
    .catch((err) => res.status(400).send(err).end());
});

// Login authentication
server.post('/api/login/', (req, res) => {
  Users.find(req.body)
    .then((result) => res.status(200).send(result).end())
    .catch((err) => res.status(400).send(err).end());
});

// Cart items retrieval
server.post('/api/cart/', (req, res) => {
  Items.find({ productID: { $in: req.body.items } })
    .then((result) => res.status(200).send(result).end())
    .catch((err) => res.status(400).send(err).end());
});

// Prevent random requests
server.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), (err) => {
    if (err) res.status(400).send(err).end();
  });
});

server.listen(port, () => console.log('Server initialized on port:', port));
