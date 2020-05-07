import React from 'react';

import SearchBar from './SearchBar';
import Actions from './Actions';
import BottomNav from './BottomNavBar';

const CentralNav = () => (
  <div className="navBarWrapper">
    <div className="navBar">
      <div className="navImage">
        <img
          className="navLogo"
          src="/assets/other/navTBox.png"
          alt="Go to REI.com Home Page"
        />
      </div>
      <div className="navBarRight">
        <div className="navBarRightUpper">
          <SearchBar />
          <Actions />
        </div>
        <BottomNav />
      </div>
    </div>
  </div>
);

export default CentralNav;
