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

      showModal: false,
      modalData: [],
      modalAdverts: [],
      modalClickables: [],
      activeCategory: ''
    };

    this.changeActive = this.changeActive.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  changeActive(active) {
    axios
      .post('/api/navbar/', { title: active })
      .then(({ data }) =>
        this.setState({
          showModal: true,
          modalData: data[0]['category'],
          modalAdverts: data[0]['other'],
          modalClickables: data[0]['actions'],
          activeCategory: data[0]['title']
        })
      )
      .catch((err) => console.error(err));
  }

  hideModal() {
    this.setState({
      showModal: false,
      modalData: [],
      activeCategory: ''
    });
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
            changeActive={this.changeActive}
            hideModal={this.hideModal}
          />
        </div>
        {this.state.showModal ? (
          <div
            className="modalClose"
            onClick={(e) => {
              if (e.target.closest('div').className === 'modalClose') {
                this.hideModal();
              }
            }}
          />
        ) : (
          <div></div>
        )}
        {this.state.showModal ? (
          <div className="modalWrapper">
            <BottomNavModal
              activeCategory={this.state.activeCategory}
              modalData={this.state.modalData}
              modalAdverts={this.state.modalAdverts}
              modalClickables={this.state.modalClickables}
              hideModal={this.hideModal}
            />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

module.exports = App;
