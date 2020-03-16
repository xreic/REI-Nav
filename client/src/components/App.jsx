import React from 'react';
import axios from 'axios';

import TopNav from './TopNavBar.jsx';
import BottomNav from './BottomNavBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      upperNav: [
        'SHOP REI',
        'REI OUTLET',
        'USED GEAR',
        'REI ADVENTURES',
        'CLASSES & EVENTS',
        'EXPERT ADVICE',
        'CO-OP JOURNAL',
        'CONVERSATIONS',
        'CAMPING PROJECT'
      ],

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

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onSubmitHandler(e) {
    e.preventDefault();
    console.log('Search Button Click');
  }

  render() {
    return (
      <div id="navigation">
        <TopNav list={this.state.upperNav} classType={'topNavItems'} />
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

            <BottomNav
              list={this.state.lowerNav}
              classType={'bottomNavItems'}
            />
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
