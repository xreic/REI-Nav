import React from 'react';

import SearchBar from './SearchBar.jsx';
import Actions from './Actions.jsx';
import BottomNav from './BottomNavBar.jsx';

const CentralNav = ({
  cartQuantity,
  userLoggedin,
  lowerNav,
  activeCategory,
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
          src="https://hrla35-fec-teamferrari-eric.s3.us-east-2.amazonaws.com/Images/Other/navTBox.png"
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
          list={lowerNav}
          classType={'bottomNavItems'}
          activeCategory={activeCategory}
          activateMainModal={activateMainModal}
          hideAllModals={hideAllModals}
        />
      </div>
    </div>
  </div>
);

export default CentralNav;
