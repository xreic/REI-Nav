// Dependencies
import React from 'react';
import { connect } from 'react-redux';

// Redux
import { showCart, hideMain, hideSearch, showLogin } from '../../redux/actions';

const mapStateToProps = (state) => ({
  cartQuantity: state.cart.cartQuantity,
  user: state.login.user
});

const mapDispatchToProps = (dispatch) => ({
  showCart: () => dispatch(showCart()),
  showLogin: async () => dispatch(showLogin()),
  hideMain: async () => dispatch(hideMain()),
  hideSearch: async () => dispatch(hideSearch())
});

const Actions = ({
  cartQuantity,
  user,
  showCart,
  showLogin,
  hideMain,
  hideSearch
}) => (
  <div className="navActions">
    <div
      className="actionItemsAccount"
      onClick={async () => {
        await Promise.all([showLogin(), hideMain(), hideSearch()]);
      }}
    >
      <img src={`/assets/other/navTBox.png`} alt="Image of a person" />
      {user ? <div>MY ACCOUNT</div> : <div>SIGN IN</div>}
    </div>
    <div
      className="actionItemsLocation"
      onClick={async () => {
        await Promise.all([hideMain(), hideSearch()]);
      }}
    >
      <img src={`/assets/other/navTBox.png`} alt="Image of a location pin" />
      <div>STORES</div>
    </div>
    <div
      className="actionItemsCart"
      onClick={async () => {
        await Promise.all([hideMain(), hideSearch()]);
      }}
      onMouseEnter={() => {
        if (cartQuantity > 0) showCart();
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

export default connect(mapStateToProps, mapDispatchToProps)(Actions);
