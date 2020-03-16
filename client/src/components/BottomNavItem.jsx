import React from 'react';

const BottomNavItem = ({ index, item, classType }) => (
  <li className={classType} key={index}>
    <p>{item}</p>
  </li>
);

module.exports = BottomNavItem;
