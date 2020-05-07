import React from 'react';

const BottomNavItem = ({
  index,
  item,
  active,
  showMain,
  activateMainModal
}) => {
  return (
    <li
      key={index}
      className={
        item === active
          ? 'bottomNavItems bottomNavItemsActive'
          : 'bottomNavItems'
      }
      onClick={() => {
        showMain({ title: item });
      }}
    >
      <p className={item === active ? 'bottomNavText' : 'doNothing'}>{item}</p>
    </li>
  );
};

export default BottomNavItem;
