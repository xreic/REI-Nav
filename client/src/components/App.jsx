import React from 'react';
import axios from 'axios';

import UpperNav from './UpperNav.jsx';

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
      ]
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
        <div className="upperNav">
          <span className="upperNavItems">{this.state.upperNav[0]}</span>
          <span className="upperNavItems">{this.state.upperNav[1]}</span>
          <span className="upperNavItems">{this.state.upperNav[2]}</span>
          <span className="upperNavItems">{this.state.upperNav[3]}</span>
          <span className="upperNavItems">{this.state.upperNav[4]}</span>
          <span className="upperNavItems">{this.state.upperNav[5]}</span>
          <span className="upperNavItems">{this.state.upperNav[6]}</span>
          <span className="upperNavItems">{this.state.upperNav[7]}</span>
          <span className="upperNavItems">{this.state.upperNav[8]}</span>
          <span className="upperNavItems">{this.state.upperNav[9]}</span>
        </div>
        <br />
        <div className="lowerContainter">
          <div className="searhBar">
            <form onSubmit={this.onSubmitHandler}>
              <input
                className="searchInput"
                placeholder="Search for great gear & clothing"
              />
              <button className="searchButton">
                <span className="glyphicon glyphicon-search"></span>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
