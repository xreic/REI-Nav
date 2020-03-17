import React from 'react';

//prettier-ignore
const TopNavItem = ({ index, item, classType }) => (
  <li key={index} className={index === 0 ? `${classType} ${classType}Active` : classType}>
    <p className={index === 0 ? "topNavText" : "doNothing"}>{item}</p>
  </li>
);

module.exports = TopNavItem;
