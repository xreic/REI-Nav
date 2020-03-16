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
      <div className="actions">
        {this.state.loggedIn ? (
          <div className="actionItems" name="myaccount" onClick={() => this.setState({ loggedIn: false })}>
            MY ACCOUNT
          </div>
        ) : (
          <div className="actionItems" name="signin" onClick={() => this.setState({ loggedIn: true })}>
            SIGN IN
          </div>
        )}
        <div className="actionItems" name="stores">STORES</div>
        <div className="actionItems" name="cart">CART</div>
      </div>
    );
  }
}

module.exports = Actions;
