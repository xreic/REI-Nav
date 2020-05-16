import React from 'react';

const cartItems = ({ index, cartQuantity, productName, productID }) => {
  return (
    <div key={index} className="cartIndiv">
<<<<<<< HEAD
      <img
        className="cartImage"
        src={`https://hrla35-fec-teamferrari-eric.s3.us-east-2.amazonaws.com/Images/Cart/${productID}.png`}
      />
      <ul className="cartDescription">
        <li>{productName}</li>
        <li>Quantity: {cartQuantity}</li>
        <li>Edit</li>
=======
      <img className="cartImage" src={`/assets/cart/${productID}.png`} />
      <ul className="cartDescription">
        <li>
          <p>{productName}</p>
        </li>
        <li>
          <p>Quantity: {cartQuantity}</p>
        </li>
        <li>
          <p>Edit</p>
        </li>
>>>>>>> redux
      </ul>
    </div>
  );
};

<<<<<<< HEAD
module.exports = cartItems;
=======
export default cartItems;
>>>>>>> redux
