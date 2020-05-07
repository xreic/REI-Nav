// Dependencies
import React from 'react';
import { connect } from 'react-redux';

// Components
import TopNavItem from './TopNavItem';

// Redux
const mapStateToProps = (state) => ({
  upper: state.nav.upper
});

const TopNav = ({ upper }) => {
  return (
    <nav className="topNavBar">
      <ul className="topNavList">
        {upper.map((item, index) => (
          <TopNavItem key={index} index={index} item={item} />
        ))}
      </ul>
    </nav>
  );
};

export default connect(mapStateToProps)(TopNav);
