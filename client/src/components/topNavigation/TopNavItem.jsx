import React from 'react';

const TopNavItem = ({ index, item, classType, hideAllModals }) => (
  <li
    key={index}
    className={index === 0 ? `${classType} ${classType}Active` : classType}
  >
    <p
      className={index === 0 ? 'topNavText' : 'doNothing'}
      onClick={hideAllModals}
    >
      {item}
    </p>
  </li>
);

module.exports = TopNavItem;
