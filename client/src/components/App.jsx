import React from 'react';
import axios from 'axios';

import TopNav from './TopNavBar.jsx';
import CentralNav from './CentralNavBar.jsx';
import BottomNavModal from './BottomNavModal.jsx';
import LoginModal from './LoginModal.jsx';

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

      showLoginModal: false,
      userLoggedin: false
    };

    this.activateMainModal = this.activateMainModal.bind(this);
    this.hideMainModal = this.hideMainModal.bind(this);

    this.activateLoginModal = this.activateLoginModal.bind(this);
    this.hideLoginModal = this.hideLoginModal.bind(this);

    this.hidaAllModals = this.hidaAllModals.bind(this);

    this.changeLogin = this.changeLogin.bind(this);
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
    this.setState(
      {
        showLoginModal: true
      },
      () => this.hideMainModal()
    );
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

  changeLogin() {
    this.setState({
      userLoggedin: !this.state.userLoggedin
    });
  }

  render() {
    return (
      <div>
        <div id="navigation">
          <TopNav list={this.state.upperNav} classType={'topNavItems'} />
          <CentralNav
            cartItems={this.state.cartItems}
            userLoggedin={this.state.userLoggedin}
            lowerNav={this.state.lowerNav}
            activeCategory={this.state.activeCategory}
            activateMainModal={this.activateMainModal}
            activateLoginModal={this.activateLoginModal}
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
          <div className="modalMainWrapper">
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
          <div
            className="modalClose"
            onClick={(e) => {
              if (e.target.closest('div').className === 'modalClose') {
                this.hideLoginModal();
              }
            }}
          />
        ) : null}
        {this.state.showLoginModal ? (
          <LoginModal
            changeLogin={this.changeLogin}
            userLoggedin={this.state.userLoggedin}
          />
        ) : null}
      </div>
    );
  }
}

module.exports = App;

// test
