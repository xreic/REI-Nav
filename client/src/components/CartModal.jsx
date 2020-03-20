import React from 'react';

const CartModal = ({ cartQuantity, cartItem, hideCartModal }) => {
  console.log(cartItem);
  return (
    <div className="testContainer">
      <div className="testWrapper">
        <div className="test1">
          <div className="test2" onMouseLeave={hideCartModal}>
            <div className="test3">
              <div className="test3-1">Added to your cart</div>
              <div className="test3-2">
                <img
                  className="test3-2-1"
                  src="https://placeimg.com/190/190/tech"
                />
                <ul className="test3-2-2">
                  <li>{cartItem.productName}</li>
                  <li>Quantity: {cartQuantity}</li>
                  <li>Edit</li>
                </ul>
              </div>
            </div>
            <div className="test4">
              <span className="cartModalClose" onClick={hideCartModal}>
                <p>✖</p>
              </span>
              <div className="test4-1">
                <div className="test4-1-1">
                  <p>Total items added to cart: </p>
                  <p>{cartQuantity}</p>
                </div>
                <button className="test4-1-2">Cart and Checkout</button>
                <div className="test4-1-3">
                  <p>Free Shipping</p>
                  <p>No minimum purchase.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

module.exports = CartModal;
