import React from 'react';

const TopNavItem = ({ index, item, classType }) => (
  <li className={classType} key={index}>
    <p>{item}</p>
  </li>
);

module.exports = TopNavItem;
