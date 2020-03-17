import React from 'react';

import TopNav from './TopNavBar.jsx';
import CentralNav from './CentralNavBar.jsx';
import BottomNavModal from './BottomNavModal.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      upperNav: [
        'SHOP REI',
        'REI OUTLET',
        'USED GEAR',
        'REI ADVENTURES',
        'CLASSES & EVENTS',
        'EXPERT ADVICE',
        'CO-OP JOURNAL',
        'CONVERSATIONS',
        'CAMPING PROJECT'
      ],

      lowerNav: [
        'Camp & Hike',
        'Climb',
        'Cycle',
        'Paddle',
        'Run',
        'Snow',
        'Travel',
        'Yoga',
        'Men',
        'Women',
        'Kids',
        'Deals',
        'More'
      ],

      activeCategory: '',

      showModal: false
    };

    this.changeActive = this.changeActive.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  changeActive(active) {
    this.setState({
      activeCategory: active,
      showModal: true
    });
  }

  hideModal(e) {
    this.setState({
      activeCategory: '',
      showModal: false
    });
  }

  render() {
    return (
      <div id="navigation">
        <TopNav list={this.state.upperNav} classType={'topNavItems'} />
        <CentralNav
          lowerNav={this.state.lowerNav}
          activeCategory={this.state.activeCategory}
          changeActive={this.changeActive}
        />
        {this.state.showModal ? (
          <BottomNavModal
            activeCategory={this.state.activeCategory}
            hideModal={this.hideModal}
          />
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

module.exports = App;
