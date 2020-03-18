const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/REI-NavBar', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongoose-d!');
});

const ItemSchema = mongoose.Schema({
  productID: Number,
  productName: String,
  productImage: String
});

const UsersSchema = mongoose.Schema({
  name: String,
  username: String,
  password: String
});

const CategorySchema = mongoose.Schema({
  title: String,
  category: [{}]
});

const Items = mongoose.model('Items', ItemSchema);
const Users = mongoose.model('Users', UsersSchema);
const Categories = mongoose.model('Categories', CategorySchema);

module.exports = {
  Items,
  Users,
  Categories
};
