import React from 'react';

//prettier-ignore
const BottomNavItem = ({ index, item, classType, activeCategory, changeActive }) => {
  return (
    <li
      key={index}
      className={ item === activeCategory ? `${classType} ${classType}Active` : classType }
      onClick={() => {
        changeActive(item);
      }}
    >
      <p className={item === activeCategory ? 'bottomNavText' : 'doNothing'}>
        {item}
      </p>
    </li>
  );
};

module.exports = BottomNavItem;
