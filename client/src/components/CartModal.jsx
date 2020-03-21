import React from 'react';

const CartModal = ({ cartQuantity, cartItem, hideCartModal }) => {
  console.log(cartItem);
  return (
    <div className="cartContainer">
      <div className="cartWrapper">
        <div className="cartWindow">
          <div className="cartContents" onMouseLeave={hideCartModal}>
            <div className="cartLeft">
              <div className="cartTitle">Added to your cart</div>
              <div className="cartDetails">
                <img
                  className="cartImage"
                  src="https://placeimg.com/190/190/tech"
                />
                <ul className="cartDescription">
                  <li>{cartItem.productName}</li>
                  <li>Quantity: {cartQuantity}</li>
                  <li>Edit</li>
                </ul>
              </div>
            </div>
            <div className="cartRight">
              <span className="cartModalClose" onClick={hideCartModal}>
                <p>✖</p>
              </span>
              <div className="cartRightDetails">
                <div className="cartQuantityModal">
                  <p>Total items added to cart: </p>
                  <p>{cartQuantity}</p>
                </div>
                <button className="cartCheckout">Cart and Checkout</button>
                <div className="cartAdditional">
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
