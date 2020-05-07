// Dependencies
import React from 'react';
import { connect } from 'react-redux';

// Components
import BottomNavItem from './BottomNavItem.jsx';

// Redux
import { showMain } from '../../redux/actions.js';

const mapStateToProps = (state) => ({
  lower: state.nav.lower,
  active: state.main.active
});

const mapDispatchToProps = (dispatch) => ({
  showMain: (payload) => dispatch(showMain(payload))
});

const BottomNav = ({
  lower,
  active,
  showMain,
  activateMainModal,
  hideAllModals
}) => {
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
            activateMainModal={activateMainModal}
          />
        ))}
        <li className="bottomNavItems" onClick={hideAllModals}>
          <p>REI Outlet</p>
          <p className="exitArrow"> &gt;</p>
        </li>
      </ul>
    </nav>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(BottomNav);
