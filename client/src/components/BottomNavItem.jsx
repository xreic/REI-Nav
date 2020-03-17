import React from 'react';

//prettier-ignore
const BottomNavItem = ({ index, item, classType, activeIndex, onClickHandler }) => {
  return (
    <li
      key={index}
      className={index === activeIndex ? `${classType} ${classType}Active` : classType}
      onClick={() => onClickHandler(index)}
    >
      <p className={index === activeIndex ? "bottomNavText" : "doNothing"}>{item}</p>
    </li>
  );
};

module.exports = BottomNavItem;
