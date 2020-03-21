const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const server = express();
const port = 3100;

//prettier-ignore
const { Items, Users, Categories, Searches } = require('../database/database.js');

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());
server.use(morgan('dev'));
server.use(express.static(path.join(__dirname, '../client/dist')));

//prettier-ignore
server.post('/api/searchbar/', (req, res) => {
  console.log('-------- POST (Search Bar) REQUEST --------');

  Items.find({ productName: { $regex : req.body.productName, $options: 'i' }}).sort({_id: -1}).limit(10)
    .then((result) => res.status(200).send(result).end())
    .catch((err) => res.status(400).send(err).end());
});

//prettier-ignore
server.post('/api/searchbar/history', (req, res) => {
  console.log('-------- POST (Search History) REQUEST --------');

  Searches.create(req.body)
    .then((result) => res.status(200).send(result).end())
    .catch((err) => res.status(400).send(err).end());
});

//prettier-ignore
server.get('/api/searchbar/history', (req, res) => {
  console.log('-------- GET (Search History) REQUEST --------');
  res.send();
  // Searches.find({}).sort({_id: -1}).limit(10)
  //   .then((result) => res.status(200).send(result).end())
  //   .catch((err) => res.status(400).send(err).end());
});

//prettier-ignore
server.delete('/api/searchbar/history', (req, res) => {
  console.log('-------- DELETE (Search History) REQUEST --------');
  res.send();
  // Searches.remove({})
  //   .then((result) => res.status(200).send(result).end())
  //   .catch((err) => res.status(400).send(err).end());
});

//prettier-ignore
server.post('/api/navbar/', (req, res) => {
  console.log('-------- POST (Lower Nav Bar) REQUEST --------');

  Categories.find(req.body)
    .then((result) => res.status(200).send(result).end())
    .catch((err) => res.status(400).send(err).end());
});

//prettier-ignore
server.post('/api/login/', (req, res) => {
  console.log('-------- POST (Login Modal) REQUEST --------');

  Users.find(req.body)
    .then((result) => res.status(200).send(result).end())
    .catch((err) => res.status(400).send(err).end());
});

//prettier-ignore
server.post('/api/cart/:id', (req, res) => {
  console.log('-------- POST (Cart) REQUEST --------');

  Items.find({ productID: req.params.id })
    .then((result) => res.status(200).send(result).end())
    .catch((err) => res.status(400).send(err).end());
});

server.listen(port, () => console.log('Server initialized on port:', port));
