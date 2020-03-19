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
            <div onClick={() => this.setState({ loggedIn: false })}>
              MY ACCOUNT
            </div>
          </div>
        ) : (
          <div className="actionItemsAccount">
            <img src="./assets/navTBox.png" alt="Image of a person" />
            <div onClick={() => this.setState({ loggedIn: true })}>SIGN IN</div>
          </div>
        )}
        <div className="actionItemsLocation">
          <img src="./assets/navTBox.png" alt="Image of a location pin" />
          <div>STORES</div>
        </div>
        <div className="actionItemsCart">
          <img src="./assets/navTBox.png" alt="Image of a cart" />
          {this.props.cartItems > 0 ? <div className="cartQuantity">{this.props.cartItems}</div> : <div/>}
          <div>CART</div>
        </div>
      </div>
    );
  }
}

module.exports = Actions;
