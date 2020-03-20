import React from 'react';

const CartModal = ({ cartItems, hideCartModal }) => (
  <div className="testContainer">
    <div className="testWrapper">
      <div className="test1">
        <div className="test2" onMouseLeave={hideCartModal}>
          <div className="test3">
            <div className="test3-1">Added to your cart</div>
          </div>
          <div className="test4">
              <span className="cartModalClose" onClick={hideCartModal}>
                <p>✖</p>
              </span>
            <div className="test4-1">
              <div className="test4-1-1">
                <p>Total items added to cart: </p>
                <p>{cartItems}</p>
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

module.exports = CartModal;
