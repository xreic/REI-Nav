import React from 'react';

import SearchBar from './SearchBar.jsx';
import Actions from './Actions.jsx';
import BottomNav from './BottomNavBar.jsx';

const CentralNav = ({
  cartQuantity,
  userLoggedin,
  activateMainModal,
  activateLoginModal,
  activateCartModal,
  activateSearches,
  searchDropdown,
  hideAllModals,
  saveRegex
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
          <SearchBar
            hideAllModals={hideAllModals}
            activateSearches={activateSearches}
            searchDropdown={searchDropdown}
            saveRegex={saveRegex}
          />
          <Actions
            cartQuantity={cartQuantity}
            userLoggedin={userLoggedin}
            activateLoginModal={activateLoginModal}
            activateCartModal={activateCartModal}
            hideAllModals={hideAllModals}
          />
        </div>
        <BottomNav
          activateMainModal={activateMainModal}
          hideAllModals={hideAllModals}
        />
      </div>
    </div>
  </div>
);

export default CentralNav;
