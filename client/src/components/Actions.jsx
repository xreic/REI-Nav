import React from 'react';

class Actions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
  }

  render() {
    return (
      <div className="navActions">
        {this.state.loggedIn ? (
          <div className="actionItemsAccount">
            <img src="./assets/navTBox.png" alt="Image of a person" />
            <div onClick={this.props.activateLoginModal}>MY ACCOUNT</div>
          </div>
        ) : (
          <div className="actionItemsAccount">
            <img src="./assets/navTBox.png" alt="Image of a person" />
            <div onClick={this.props.activateLoginModal}>SIGN IN</div>
          </div>
        )}
        <div className="actionItemsLocation" onClick={this.props.hidaAllModals}>
          <img src="./assets/navTBox.png" alt="Image of a location pin" />
          <div>STORES</div>
        </div>
        <div className="actionItemsCart" onClick={this.props.hidaAllModals}>
          <img src="./assets/navTBox.png" alt="Image of a cart" />
          {this.props.cartItems > 0 ? (
            <div className="cartQuantity">{this.props.cartItems}</div>
          ) : null}
          <div>CART</div>
        </div>
      </div>
    );
  }
}

module.exports = Actions;
