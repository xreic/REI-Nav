import React from 'react';

const cartItems = ({ index, cartQuantity, productName, productImage }) => {
  return (
    <div key={index} className="cartIndiv">
      <img className="cartImage" src="https://placeimg.com/190/190/tech" />
      <ul className="cartDescription">
        <li>{productName}</li>
        <li>Quantity: {cartQuantity}</li>
        <li>Edit</li>
      </ul>
    </div>
  );
};

module.exports = cartItems;

{
  /* <li>{'this.props.cartItem.productName'}</li>
<li>Quantity: {this.props.cartQuantity}</li> */
}
