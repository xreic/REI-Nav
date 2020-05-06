import React from 'react';

import TopNavItem from './TopNavItem.jsx';

const TopNav = ({ list, classType, hideAllModals }) => (
  <nav className="topNavBar">
    <ul className="topNavList">
      {list.map((item, index) => (
        <TopNavItem
          key={index}
          index={index}
          item={item}
          classType={classType}
          hideAllModals={hideAllModals}
        />
      ))}
    </ul>
  </nav>
);

export default TopNav;
