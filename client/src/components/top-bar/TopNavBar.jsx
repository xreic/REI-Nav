<<<<<<< HEAD
import React from 'react';

import TopNavItem from './TopNavItem.jsx';

const TopNav = ({ list, classType, hideAllModals }) => (
  <nav className="topNavBar">
    <ul className="topNavList">
      {list.map((item, index) => (
        <TopNavItem
          key={index}
          index={index}
          item={item}
          classType={classType}
          hideAllModals={hideAllModals}
        />
      ))}
    </ul>
  </nav>
);

module.exports = TopNav;
=======
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
>>>>>>> redux
