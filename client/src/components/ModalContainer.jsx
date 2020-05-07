// Dependencies
import React from 'react';
import { connect } from 'react-redux';

// Components
import BottomNavModal from './modals/category/BottomNavModal';
import CartModal from './modals/cart/CartModal';
import SearchModal from './modals/search/SearchModal';
import LoginModal from './modals/login/LoginModal';
import { hideMain, hideLogin, hideSearch } from '../redux/actions';

// Redux
const mapStateToProps = (state) => ({
  mainVisible: state.main.visible,
  cartVisible: state.cart.visible,
  loginVisible: state.login.visible,
  searchVisible: state.search.visible,
  xCoords: state.cart.xCoords
});

const mapDispatchToProps = (dispatch) => ({
  hideMain: () => dispatch(hideMain()),
  hideLogin: () => dispatch(hideLogin()),
  hideSearch: () => dispatch(hideSearch())
});

const ModalContainer = (props) => (
  <React.Fragment>
    {props.mainVisible || props.loginVisible || props.searchVisible ? (
      <div
        className="modalClose"
        onClick={(e) => {
          if (e.target.closest('div').className === 'modalClose') {
            props.hideMain();
            props.hideLogin();
            props.hideSearch();
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

    {props.searchVisible ? <SearchModal /> : null}

    {props.loginVisible ? <LoginModal /> : null}
  </React.Fragment>
);

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
