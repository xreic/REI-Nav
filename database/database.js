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
});

const Items = mongoose.model('Items', ItemSchema);

module.exports = Items;
