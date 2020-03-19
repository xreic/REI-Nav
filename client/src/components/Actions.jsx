import React from 'react';

class Actions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };

    this.changeLoggedIn = this.changeLoggedIn.bind(this);
  }

  changeLoggedIn() {
    if (!this.state.loggedIn) {
      this.props.activateLoginModal();
      this.setState({
        loggedIn: !this.state.loggedIn
      });
    } else {
      this.props.hidaAllModals();
      this.setState({
        loggedIn: !this.state.loggedIn
      });
    }
  }

  render() {
    return (
      <div className="navActions">
        <div className="actionItemsAccount" onClick={this.changeLoggedIn}>
          <img src="./assets/navTBox.png" alt="Image of a person" />
          {this.state.loggedIn ? <div>MY ACCOUNT</div> : <div>SIGN IN</div>}
        </div>

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
