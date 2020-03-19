import React from 'react';

import TopNav from './TopNavBar.jsx';
import CentralNav from './CentralNavBar.jsx';
import BottomNavModal from './BottomNavModal.jsx';
import axios from 'axios';

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

      cartItems: 2,

      showMainModal: false,
      modalData: [],
      modalAdverts: [],
      modalClickables: [],
      activeCategory: '',

      showLoginModal: false
    };

    this.activateMainModal = this.activateMainModal.bind(this);
    this.hideMainModal = this.hideMainModal.bind(this);

    this.activateLoginModal = this.activateLoginModal.bind(this);
    this.hideLoginModal = this.hideLoginModal.bind(this);

    this.hidaAllModals = this.hidaAllModals.bind(this);
  }

  activateMainModal(active) {
    this.hideLoginModal();

    axios
      .post('/api/navbar/', { title: active })
      .then(({ data }) =>
        this.setState({
          showMainModal: true,
          modalData: data[0]['category'],
          modalAdverts: data[0]['other'],
          modalClickables: data[0]['actions'],
          activeCategory: data[0]['title']
        })
      )
      .catch((err) => console.error(err));
  }

  hideMainModal() {
    this.setState({
      showMainModal: false,
      modalData: [],
      activeCategory: ''
    });
  }

  activateLoginModal() {
    this.hideMainModal();
    this.setState({
      showLoginModal: true
    });
  }

  hideLoginModal() {
    this.setState({
      showLoginModal: false
    });
  }

  hidaAllModals() {
    this.hideMainModal();
    this.hideLoginModal();
  }

  render() {
    return (
      <div>
        <div id="navigation">
          <TopNav list={this.state.upperNav} classType={'topNavItems'} />
          <CentralNav
            cartItems={this.state.cartItems}
            lowerNav={this.state.lowerNav}
            activeCategory={this.state.activeCategory}
            activateMainModal={this.activateMainModal}
            activateLoginModal={this.activateLoginModal}
            hideMainModal={this.hideMainModal}
            hideLoginModal={this.hideLoginModal}
            hidaAllModals={this.hidaAllModals}
          />
        </div>
        {this.state.showMainModal ? (
          <div
            className="modalClose"
            onClick={(e) => {
              if (e.target.closest('div').className === 'modalClose') {
                this.hideMainModal();
              }
            }}
          />
        ) : null}
        {this.state.showMainModal ? (
          <div className="modalWrapper">
            <BottomNavModal
              activeCategory={this.state.activeCategory}
              modalData={this.state.modalData}
              modalAdverts={this.state.modalAdverts}
              modalClickables={this.state.modalClickables}
              hideMainModal={this.hideMainModal}
            />
          </div>
        ) : null}
        {this.state.showLoginModal ? (
          <div className="test">Something</div>
        ) : null}
      </div>
    );
  }
}

module.exports = App;
