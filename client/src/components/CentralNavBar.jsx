import React from 'react';

import SearchBar from './SearchBar.jsx';
import Actions from './Actions.jsx';
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
      ]
    };
  }

  render() {
    return (
      <div className="navBarWrapper">
        <div className="navBar">
          <div className="navImage">
            <img
              src="//satchel.rei.com/media/img/header/rei-co-op-logo-white.svg"
              alt="Go to REI.com Home Page"
            />
          </div>

          <div className="navBarRight">
            <div className="navBarRightUpper">
              <SearchBar />
              <Actions />
            </div>
            <hr className="middleRule" />
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

module.exports = CentralNav;
