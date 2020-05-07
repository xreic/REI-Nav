import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  cartQuantity: state.cart.cartQuantity,
  user: state.login.user
});

const Actions = ({
  cartQuantity,
  user,
  activateLoginModal,
  activateCartModal,
  hideAllModals
}) => (
  <div className="navActions">
    <div className="actionItemsAccount" onClick={activateLoginModal}>
      <img src={`/assets/other/navTBox.png`} alt="Image of a person" />
      {user ? <div>MY ACCOUNT</div> : <div>SIGN IN</div>}
    </div>
    <div className="actionItemsLocation" onClick={hideAllModals}>
      <img src={`/assets/other/navTBox.png`} alt="Image of a location pin" />
      <div>STORES</div>
    </div>
    <div
      className="actionItemsCart"
      onClick={hideAllModals}
      onMouseEnter={() => {
        if (cartQuantity > 0) {
          activateCartModal();
        }
      }}
    >
      <img src={`/assets/other/navTBox.png`} alt="Image of a cart" />
      {cartQuantity > 0 ? (
        <div className="cartQuantity">{cartQuantity}</div>
      ) : null}
      <div>CART</div>
    </div>
  </div>
);

export default connect(mapStateToProps)(Actions);
