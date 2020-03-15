import React from 'react';
import axios from 'axios';

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
        <div className="topNavBar">
          <span className="topNavItems">{this.state.upperNav[0]}</span>
          <span className="topNavItems">{this.state.upperNav[1]}</span>
          <span className="topNavItems">{this.state.upperNav[2]}</span>
          <span className="topNavItems">{this.state.upperNav[3]}</span>
          <span className="topNavItems">{this.state.upperNav[4]}</span>
          <span className="topNavItems">{this.state.upperNav[5]}</span>
          <span className="topNavItems">{this.state.upperNav[6]}</span>
          <span className="topNavItems">{this.state.upperNav[7]}</span>
          <span className="topNavItems">{this.state.upperNav[8]}</span>
          <span className="topNavItems">{this.state.upperNav[9]}</span>
        </div>
        <div className="navBar">
          
          <aside className="navImage">
            <img
              src="//satchel.rei.com/media/img/header/rei-co-op-logo-white.svg"
              alt="Go to REI.com Home Page"
            ></img>
          </aside>

          <div className="navBarRight">

            <div className="navBarRightUpper">

              <form className="navSearchForm" onSubmit={this.onSubmitHandler}>
                <input className="navSearchInput" placeholder="Search for great gear & clothing"/>
                <button className="navSearchButton">
                  <span className="glyphicon glyphicon-search"></span>
                </button>
              </form>

            </div>

            <hr />

            <div className="bottomNavBar">
              <span className="bottomNavItems">{this.state.lowerNav[0]}</span>
              <span className="bottomNavItems">{this.state.lowerNav[1]}</span>
              <span className="bottomNavItems">{this.state.lowerNav[2]}</span>
              <span className="bottomNavItems">{this.state.lowerNav[3]}</span>
              <span className="bottomNavItems">{this.state.lowerNav[4]}</span>
              <span className="bottomNavItems">{this.state.lowerNav[5]}</span>
              <span className="bottomNavItems">{this.state.lowerNav[6]}</span>
              <span className="bottomNavItems">{this.state.lowerNav[7]}</span>
              <span className="bottomNavItems">{this.state.lowerNav[8]}</span>
              <span className="bottomNavItems">{this.state.lowerNav[9]}</span>
              <span className="bottomNavItems">{this.state.lowerNav[10]}</span>
              <span className="bottomNavItems">{this.state.lowerNav[11]}</span>
              <span className="bottomNavItems">{this.state.lowerNav[12]}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;

// {this.state.loggedIn ?
//   (<div name="myaccount" onClick={() => this.setState({ loggedIn: false })}>
//     MY ACCOUNT
//   </div>
//   ) : (
//   <div name="signin" onClick={() => this.setState({ loggedIn: true })}>
//     SIGN IN
//   </div>
// )}

{
  /*

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
</div> */
}
