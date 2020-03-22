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
          src="//satchel.rei.com/media/img/header/rei-co-op-logo-white.svg"
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

module.exports = CentralNav;
