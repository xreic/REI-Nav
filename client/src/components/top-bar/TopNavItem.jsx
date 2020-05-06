import React from 'react';
import { connect } from 'react-redux';

import { hideMain, hideLogin, hideSearch } from '../../redux/actions';

const mapDispatchToProps = (dispatch) => ({
  hideMain: () => dispatch(hideMain()),
  hideLogin: () => dispatch(hideLogin()),
  hideSearch: () => dispatch(hideSearch())
});

const TopNavItem = (props) => {
  const { index, item, hideAllModals } = props;
  return (
    <li
      key={index}
      className={index === 0 ? 'topNavItems topNavItemsActive' : 'topNavItems'}
    >
      <p
        className={index === 0 ? 'topNavText' : 'doNothing'}
        onClick={() => {
          props.hideMain();
          props.hideLogin();
          props.hideSearch();
          hideAllModals();
        }}
      >
        {item}
      </p>
    </li>
  );
};

export default connect(null, mapDispatchToProps)(TopNavItem);
