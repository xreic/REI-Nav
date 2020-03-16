import React from 'react';
import TopNavItem from './TopNavItem.jsx';

const TopNav = ({ list, classType }) => (
  <header className="topNavBar">
    <ul className="topNavList">
      {list.map((item, index) => (
        <TopNavItem
          key={index}
          index={index}
          item={item}
          classType={classType}
        />
      ))}
    </ul>
  </header>
);

module.exports = TopNav;
