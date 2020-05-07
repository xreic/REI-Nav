// Dependencies
import React from 'react';
import { connect } from 'react-redux';

// Redux
import { hideMain, hideLogin, hideSearch } from '../../redux/actions';

const mapDispatchToProps = (dispatch) => ({
  hideMain: async () => dispatch(hideMain()),
  hideLogin: async () => dispatch(hideLogin()),
  hideSearch: async () => dispatch(hideSearch())
});

const TopNavItem = ({ index, item, hideMain, hideLogin, hideSearch }) => (
  <li className={index === 0 ? 'topNavItems topNavItemsActive' : 'topNavItems'}>
    <p
      className={index === 0 ? 'topNavText' : 'doNothing'}
      onClick={async () => {
        await Promise.all([hideMain(), hideLogin(), hideSearch()]);
      }}
    >
      {item}
    </p>
  </li>
);

export default connect(null, mapDispatchToProps)(TopNavItem);
