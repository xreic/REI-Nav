import React from 'react';
import BottomNav from './BottomNavBar.jsx';

class CentralNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lowerNav: [
        'Camp & Hike',
        'Climb',
        'Cycle',
        'Paddle',
        'Run',
        'Snow',
        'Travel',
        'Yoga',
        'Men',
        'Women',
        'Kids',
        'Deals',
        'More'
      ],

      loggedIn: false
    };
  }

  render() {
    return (
      <div className="navBar">
        <div className="navImage">
          <img
            src="//satchel.rei.com/media/img/header/rei-co-op-logo-white.svg"
            alt="Go to REI.com Home Page"
          ></img>
        </div>

        <div className="navBarRight">
          <div className="navBarRightUpper">
            <form className="navSearchForm" onSubmit={this.onSubmitHandler}>
              <input
                className="navSearchInput"
                placeholder="Search for great gear & clothing"
              />
              <button className="navSearchButton">
                <span className="glyphicon glyphicon-search"></span>
              </button>
            </form>

            <div className="actions">
              {this.state.loggedIn ? (
                <div
                  className="easyTagger"
                  name="myaccount"
                  onClick={() => this.setState({ loggedIn: false })}
                >
                  MY ACCOUNT
                </div>
              ) : (
                <div
                  className="easyTagger"
                  name="signin"
                  onClick={() => this.setState({ loggedIn: true })}
                >
                  SIGN IN
                </div>
              )}
              <div className="easyTagger" name="stores">
                STORES
              </div>
              <div className="easyTagger" name="cart">
                CART
              </div>
            </div>
          </div>

          <hr />

          <BottomNav list={this.state.lowerNav} classType={'bottomNavItems'} />
        </div>
      </div>
    );
  }
}

module.exports = CentralNav;
