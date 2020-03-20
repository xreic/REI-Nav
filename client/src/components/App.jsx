import React from 'react';
import axios from 'axios';

import TopNav from './TopNavBar.jsx';
import CentralNav from './CentralNavBar.jsx';
import BottomNavModal from './BottomNavModal.jsx';
import LoginModal from './LoginModal.jsx';
import CartModal from './CartModal.jsx';
import SearchModal from './SearchModal.jsx';

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

      cartQuantity: 2,
      cartItem: {},
      showCartModal: false,

      showMainModal: false,
      modalData: [],
      modalAdverts: [],
      modalClickables: [],
      activeCategory: '',

      showLoginModal: false,
      userLoggedin: false,
      userFullame: '',

      showSearches: false,
      searchData: []
    };

    this.activateMainModal = this.activateMainModal.bind(this);
    this.hideMainModal = this.hideMainModal.bind(this);

    this.activateLoginModal = this.activateLoginModal.bind(this);
    this.hideLoginModal = this.hideLoginModal.bind(this);

    this.activateCartModal = this.activateCartModal.bind(this);
    this.hideCartModal = this.hideCartModal.bind(this);

    this.hidaAllModals = this.hidaAllModals.bind(this);

    this.changeLogin = this.changeLogin.bind(this);
    this.retrieveUserdata = this.retrieveUserdata.bind(this);

    this.activateSearches = this.activateSearches.bind(this);
    this.hideSearches = this.hideSearches.bind(this);
    this.searchDropdown = this.searchDropdown.bind(this);
  }

  componentDidMount() {
    axios
      .post(`/api/cart/${Math.ceil(Math.random() * 100)}`)
      .then(({ data }) =>
        this.setState({
          cartItem: data[0]
        })
      )
      .catch((err) => console.error(err));
  }

  hidaAllModals() {
    this.hideMainModal();
    this.hideLoginModal();
    this.hideSearches();
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
    this.setState({
      showLoginModal: true,
      showSearches: false
    }, () => this.hideMainModal());
  }

  hideLoginModal() {
    this.setState({
      showLoginModal: false
    });
  }

  activateCartModal() {
    this.setState({
      showCartModal: true
    });
  }

  hideCartModal() {
    this.setState({
      showCartModal: false
    });
  }

  changeLogin() {
    this.setState({
      userLoggedin: !this.state.userLoggedin,
      userFullame: ''
    });
  }

  retrieveUserdata(userObject, callback) {
    axios
      .post('/api/login/', userObject)
      .then(({ data }) => {
        if (data.length > 0) {
          document.getElementById('doubleForm1').reset();
          document.getElementById('doubleForm2').reset();

          this.changeLogin();
          callback(false);

          this.setState({
            userFullame: data[0]['name']
          });
        } else {
          callback(true);
        }
      })
      .catch((err) => console.error(err));
  }

  activateSearches() {
    this.setState({
      showSearches: true
    });
  }

  hideSearches() {
    this.setState({
      showSearches: false
    });
  }

  searchDropdown(data) {
    if (data === []) {
      this.hideSearches();
    } else {
      this.setState({
        showSearches: true,
        searchData: data
      });
    }
  }

  render() {
    return (
      <div>
        <div id="navigation">
          <TopNav list={this.state.upperNav} classType={'topNavItems'} />
          <CentralNav
            cartQuantity={this.state.cartQuantity}
            userLoggedin={this.state.userLoggedin}
            lowerNav={this.state.lowerNav}
            activeCategory={this.state.activeCategory}
            activateMainModal={this.activateMainModal}
            activateLoginModal={this.activateLoginModal}
            activateCartModal={this.activateCartModal}
            activateSearches={this.activateSearches}
            hidaAllModals={this.hidaAllModals}
            searchDropdown={this.searchDropdown}
          />
        </div>
        {this.state.showMainModal ||
        this.state.showLoginModal ||
        this.state.showSearches !== [] ? (
          <div
            className="modalClose"
            onClick={(e) => {
              if (e.target.closest('div').className === 'modalClose') {
                this.hidaAllModals();
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
          <LoginModal
            userFullame={this.state.userFullame}
            changeLogin={this.changeLogin}
            userLoggedin={this.state.userLoggedin}
            retrieveUserdata={this.retrieveUserdata}
            hideLoginModal={this.hideLoginModal}
          />
        ) : null}
        {this.state.showCartModal ? (
          <CartModal
            cartQuantity={this.state.cartQuantity}
            cartItem={this.state.cartItem}
            hideCartModal={this.hideCartModal}
          />
        ) : null}
        {this.state.showSearches ? <SearchModal /> : null}
      </div>
    );
  }
}

module.exports = App;

// test
