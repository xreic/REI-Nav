import React from 'react';

const cartItems = ({ index, cartQuantity, productName, productID }) => {
  return (
    <div key={index} className="cartIndiv">
      <img
        className="cartImage"
        src={`https://hrla35-fec-teamferrari-eric.s3.us-east-2.amazonaws.com/Images/Cart/${productID}.png`}
      />
      <ul className="cartDescription">
        <li>{productName}</li>
        <li>Quantity: {cartQuantity}</li>
        <li>Edit</li>
      </ul>
    </div>
  );
};

module.exports = cartItems;
