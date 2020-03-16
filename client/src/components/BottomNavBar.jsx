import React from 'react';
import BottomNavItem from './BottomNavItem.jsx';

const BottomNav = ({ list, classType }) => (
  <nav className="bottomNavBar">
    <ul className="bottomNavList">
      {list.map((item, index) => (
        <BottomNavItem
          key={index}
          index={index}
          item={item}
          classType={classType}
        />
      ))}
      <li className={classType}>
        <p>REI Outlet</p>
      </li>
      <li className="bottomNavItemsArrow">
        <p>></p>
      </li>
    </ul>
  </nav>
);

module.exports = BottomNav;
