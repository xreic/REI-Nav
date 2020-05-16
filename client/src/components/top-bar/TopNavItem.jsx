<<<<<<< HEAD
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
=======
// Dependencies
import React from 'react';
import { connect } from 'react-redux';

// Redux
import { hideMain, hideLogin, hideSearch, hideCart } from '../../redux/actions';

const mapDispatchToProps = (dispatch) => ({
  hideMain: async () => dispatch(hideMain()),
  hideLogin: async () => dispatch(hideLogin()),
  hideSearch: async () => dispatch(hideSearch()),
  hideCart: async () => dispatch(hideCart())
});

const TopNavItem = ({
  index,
  item,
  hideMain,
  hideLogin,
  hideSearch,
  hideCart
}) => (
  <li className={index === 0 ? 'topNavItems topNavItemsActive' : 'topNavItems'}>
    <p
      className={index === 0 ? 'topNavText' : 'doNothing'}
      onClick={async () => {
        await Promise.all([hideMain(), hideLogin(), hideSearch(), hideCart()]);
      }}
    >
      {item}
    </p>
  </li>
);

export default connect(null, mapDispatchToProps)(TopNavItem);
>>>>>>> redux
