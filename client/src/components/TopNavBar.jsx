import React from 'react';

import TopNavItem from './TopNavItem.jsx';

//prettier-ignore
const TopNav = ({ list, classType }) => (
  <nav className="topNavBar">
    <ul className="topNavList">
      {list.map((item, index) => ( <TopNavItem key={index} index={index} item={item} classType={classType}/> ))}
    </ul>
  </nav>
);

module.exports = TopNav;
