const mongoose = require('mongoose');
const url =
  process.env.MONGO_CONNECTION_STRING || 'mongodb://localhost:27017/rei-mockup';

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose-d!');
});

const ItemSchema = mongoose.Schema({
  productID: Number,
  productName: String
});

const UsersSchema = mongoose.Schema({
  name: String,
  username: String,
  password: String
});

const CategorySchema = mongoose.Schema({
  title: String,
  category: [{}],
  other: Array,
  actions: [{}]
});

const SearchSchema = mongoose.Schema({
  search: String
});

const Items = mongoose.model('Items', ItemSchema);
const Users = mongoose.model('Users', UsersSchema);
const Categories = mongoose.model('Categories', CategorySchema);
const Searches = mongoose.model('Searches', SearchSchema);

module.exports = { Items, Users, Categories, Searches };
