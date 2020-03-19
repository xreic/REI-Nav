import React from 'react';

import SearchBar from './SearchBar.jsx';
import Actions from './Actions.jsx';
import BottomNav from './BottomNavBar.jsx';

const CentralNav = ({
  cartItems,
  lowerNav,
  activeCategory,
  activateMainModal,
  activateLoginModal,
  hideMainModal,
  hideLoginModal,
  hidaAllModals
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
          <SearchBar hidaAllModals={hidaAllModals} />
          <Actions
            cartItems={cartItems}
            activateLoginModal={activateLoginModal}
            hideLoginModal={hideLoginModal}
            hidaAllModals={hidaAllModals}
          />
        </div>
        <BottomNav
          list={lowerNav}
          classType={'bottomNavItems'}
          activeCategory={activeCategory}
          activateMainModal={activateMainModal}
          hideMainModal={hideMainModal}
        />
      </div>
    </div>
  </div>
);

module.exports = CentralNav;
