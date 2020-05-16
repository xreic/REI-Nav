<<<<<<< HEAD
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

module.exports = BottomNavItem;
=======
import React from 'react';
import axios from 'axios';

const BottomNavItem = ({
  index,
  item,
  active,
  showMain,
  hideLogin,
  hideSearch
}) => {
  return (
    <li
      key={index}
      className={
        item === active
          ? 'bottomNavItems bottomNavItemsActive'
          : 'bottomNavItems'
      }
      onClick={async () => {
        hideLogin();
        hideSearch();
        const { data } = await axios.post('/api/navbar/', { title: item });
        showMain(data[0]);
      }}
    >
      <p className={item === active ? 'bottomNavText' : 'doNothing'}>{item}</p>
    </li>
  );
};

export default BottomNavItem;
>>>>>>> redux
