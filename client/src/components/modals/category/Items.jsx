import React from 'react';

<<<<<<< HEAD
const Items = ({ index, item }) => {
  return (
    <div className="modalMainLists" key={index}>
=======
const Items = ({ item }) => {
  return (
    <div className="modalMainLists">
>>>>>>> redux
      <p>{item}</p>
    </div>
  );
};

<<<<<<< HEAD
module.exports = Items;
=======
export default Items;
>>>>>>> redux
