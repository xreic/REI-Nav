import React from 'react';

const Actions = ({
  cartItems,
  userLoggedin,
  activateLoginModal,
  activateCartModal,
  hidaAllModals
}) => (
  <div className="navActions">
    <div className="actionItemsAccount" onClick={activateLoginModal}>
      <img src="./assets/navTBox.png" alt="Image of a person" />
      {userLoggedin ? <div>MY ACCOUNT</div> : <div>SIGN IN</div>}
    </div>

    <div className="actionItemsLocation" onClick={hidaAllModals}>
      <img src="./assets/navTBox.png" alt="Image of a location pin" />
      <div>STORES</div>
    </div>

    <div
      className="actionItemsCart"
      onClick={hidaAllModals}
      onMouseEnter={activateCartModal}
    >
      <img src="./assets/navTBox.png" alt="Image of a cart" />
      {cartItems > 0 ? <div className="cartQuantity">{cartItems}</div> : null}
      <div>CART</div>
    </div>
  </div>
);

module.exports = Actions;
