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
  hidaAllModals,
  searchDropdown
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
            hidaAllModals={hidaAllModals}
            activateSearches={activateSearches}
            searchDropdown={searchDropdown}
          />
          <Actions
            cartQuantity={cartQuantity}
            userLoggedin={userLoggedin}
            activateLoginModal={activateLoginModal}
            activateCartModal={activateCartModal}
            hidaAllModals={hidaAllModals}
          />
        </div>
        <BottomNav
          list={lowerNav}
          classType={'bottomNavItems'}
          activeCategory={activeCategory}
          activateMainModal={activateMainModal}
          hidaAllModals={hidaAllModals}
        />
      </div>
    </div>
  </div>
);

module.exports = CentralNav;
