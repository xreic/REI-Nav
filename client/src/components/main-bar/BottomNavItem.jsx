import React from 'react';
import axios from 'axios';

const BottomNavItem = ({ index, item, active, showMain }) => {
  return (
    <li
      key={index}
      className={
        item === active
          ? 'bottomNavItems bottomNavItemsActive'
          : 'bottomNavItems'
      }
      onClick={async () => {
        const { data } = await axios.post('/api/navbar/', { title: item });
        showMain(data[0]);
      }}
    >
      <p className={item === active ? 'bottomNavText' : 'doNothing'}>{item}</p>
    </li>
  );
};

export default BottomNavItem;
