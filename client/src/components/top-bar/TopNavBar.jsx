import React from 'react';
import { connect } from 'react-redux';

import TopNavItem from './TopNavItem.jsx';

const mapStateToProps = (state) => ({
  upper: state.nav.upper
});

const TopNav = ({ upper, hideAllModals }) => {
  return (
    <nav className="topNavBar">
      <ul className="topNavList">
        {upper.map((item, index) => (
          <TopNavItem
            key={index}
            index={index}
            item={item}
            hideAllModals={hideAllModals}
          />
        ))}
      </ul>
    </nav>
  );
};

export default connect(mapStateToProps)(TopNav);
