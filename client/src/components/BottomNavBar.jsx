import React from 'react';
import BottomNavItem from './BottomNavItem.jsx';

class BottomNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: ''
    };

    this.onClickHandler = this.onClickHandler.bind(this);
  }

  //prettier-ignore
  onClickHandler(index) {
    this.setState({
      activeIndex: index
    });
  }

  render() {
    return (
      <nav className="bottomNavBar">
        <ul className="bottomNavList">
          {this.props.list.map((item, index) => (
            <BottomNavItem
              key={index}
              index={index}
              item={item}
              classType={this.props.classType}
              activeIndex={this.state.activeIndex}
              onClickHandler={this.onClickHandler}
            />
          ))}
          <li className="bottomNavItems">
            <p>REI Outlet</p>
            <p className="exitArrow"> &gt;</p>
          </li>
        </ul>
      </nav>
    );
  }
}

module.exports = BottomNav;
