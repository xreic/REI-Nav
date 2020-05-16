import React from 'react';

const cartItems = ({ index, cartQuantity, productName, productID }) => {
  return (
    <div key={index} className="cartIndiv">
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
      </ul>
    </div>
  );
};

export default cartItems;
