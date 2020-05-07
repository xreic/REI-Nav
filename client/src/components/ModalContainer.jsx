// Dependencies
import React from 'react';
import { connect } from 'react-redux';

// Components
import BottomNavModal from './modals/category/BottomNavModal.jsx';
import CartModal from './modals/cart/CartModal.jsx';

// Redux
const mapStateToProps = (state) => ({
  mainVisible: state.main.visible,
  cartVisible: state.cart.visible,
  loginVisible: state.login.visible,
  searchVisible: state.search.visible,
  xCoords: state.cart.xCoords
});

const ModalContainer = (props) => (
  <React.Fragment>
    {props.mainVisible || props.loginVisible || props.searchVisible ? (
      <div
        className="modalClose"
        onClick={(e) => {
          if (e.target.closest('div').className === 'modalClose') {
            props.hideAllModals();
          }
        }}
      />
    ) : null}

    {props.mainVisible ? (
      <div className="modalMainWrapper">
        <BottomNavModal />
      </div>
    ) : null}

    {props.cartVisible ? <CartModal xCoords={props.xCoords} /> : null}
  </React.Fragment>
);

export default connect(mapStateToProps, null)(ModalContainer);

// {this.state.showLoginModal ? (
//   <LoginModal
//     userFullame={this.state.userFullame}
//     changeLogin={this.changeLogin}
//     userLoggedin={this.state.userLoggedin}
//     retrieveUserdata={this.retrieveUserdata}
//     hideLoginModal={this.hideLoginModal}
//   />
// ) : null}
