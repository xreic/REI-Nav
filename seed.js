const faker = require('faker');
const { Items, Users } = require('./database/database.js');

let searchables = [];

for (var i = 1; i <= 100; i++) {
  searchables.push({
    productID: i,
    productName: faker.fake('{{commerce.productName}}'),
    productImage: faker.fake('{{image.image}}')
  });
}

Items.insertMany(searchables)
  .then(() => console.log('Items seeded!'))
  .catch((err) => console.error(err));
