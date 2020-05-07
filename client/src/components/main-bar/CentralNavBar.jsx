import React from 'react';

import SearchBar from './SearchBar.jsx';
import Actions from './Actions.jsx';
import BottomNav from './BottomNavBar.jsx';

const CentralNav = ({
  activateLoginModal,
  activateCartModal,
  hideAllModals
}) => (
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
          <SearchBar hideAllModals={hideAllModals} />
          <Actions
            activateLoginModal={activateLoginModal}
            activateCartModal={activateCartModal}
            hideAllModals={hideAllModals}
          />
        </div>
        <BottomNav />
      </div>
    </div>
  </div>
);

export default CentralNav;
