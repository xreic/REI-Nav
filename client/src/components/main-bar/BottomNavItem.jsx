import React from 'react';

//prettier-ignore
const BottomNavItem = ({ index, item, classType, activeCategory, activateMainModal }) => {
  return (
    <li
      key={index}
      className={ item === activeCategory ? `${classType} ${classType}Active` : classType }
      onClick={() => {
        activateMainModal(item);
      }}
    >
      <p className={item === activeCategory ? 'bottomNavText' : 'doNothing'}>
        {item}
      </p>
    </li>
  );
};

export default BottomNavItem;
