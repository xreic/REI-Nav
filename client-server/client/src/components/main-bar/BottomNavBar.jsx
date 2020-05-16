// Dependencies
import React from 'react';
import { connect } from 'react-redux';

// Components
import BottomNavItem from './BottomNavItem';

// Redux
import { showMain, hideSearch, hideLogin } from '../../redux/actions.js';

const mapStateToProps = (state) => ({
  lower: state.nav.lower,
  active: state.main.active
});

const mapDispatchToProps = (dispatch) => ({
  showMain: (payload) => dispatch(showMain(payload)),
  hideSearch: () => dispatch(hideSearch()),
  hideLogin: () => dispatch(hideLogin())
});

const BottomNav = ({ lower, active, showMain, hideSearch }) => {
  return (
    <nav className="bottomNavBar">
      <ul className="bottomNavList">
        {lower.map((item, index) => (
          <BottomNavItem
            key={index}
            index={index}
            item={item}
            active={active}
            showMain={showMain}
            hideLogin={hideLogin}
            hideSearch={hideSearch}
          />
        ))}
        <li className="bottomNavItems" onClick={hideSearch}>
          <p>REI Outlet</p>
          <p className="exitArrow"> &gt;</p>
        </li>
      </ul>
    </nav>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(BottomNav);
