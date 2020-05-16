<<<<<<< HEAD
import React from 'react';
import axios from 'axios';

import TopNav from './top-bar/TopNavBar.jsx';
import CentralNav from './main-bar/CentralNavBar.jsx';
import BottomNavModal from './modals/category/BottomNavModal.jsx';
import LoginModal from './modals/login/LoginModal.jsx';
import CartModal from './modals/cart/CartModal.jsx';
import SearchModal from './modals/search/SearchModal.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    //prettier-ignore
    this.state = {
      upperNav: ['SHOP REI','REI OUTLET','USED GEAR','REI ADVENTURES','CLASSES & EVENTS','EXPERT ADVICE','CO-OP JOURNAL','CONVERSATIONS','CAMPING PROJECT' ],

      lowerNav: ['Camp & Hike','Climb','Cycle','Paddle','Run','Snow','Travel','Yoga','Men','Women','Kids','Deals','More' ],

      cartQuantity: Math.floor(Math.random() * 7),
      xCoords: 0,
      cartItems: [],
      showCartModal: false,

      showMainModal: false,
      modalData: [],
      modalAdverts: [],
      modalClickables: [],
      activeCategory: '',

      showLoginModal: false,
      userLoggedin: false,
      userFullame: '',

      searchRegex: '',
      showSearches: false,
      searchData: []
    };

    this.activateMainModal = this.activateMainModal.bind(this);
    this.hideMainModal = this.hideMainModal.bind(this);

    this.activateLoginModal = this.activateLoginModal.bind(this);
    this.hideLoginModal = this.hideLoginModal.bind(this);

    this.activateCartModal = this.activateCartModal.bind(this);
    this.hideCartModal = this.hideCartModal.bind(this);
    this.setCoords = this.setCoords.bind(this);

    this.hideAllModals = this.hideAllModals.bind(this);

    this.changeLogin = this.changeLogin.bind(this);
    this.retrieveUserdata = this.retrieveUserdata.bind(this);

    this.activateSearches = this.activateSearches.bind(this);
    this.hideSearches = this.hideSearches.bind(this);
    this.searchDropdown = this.searchDropdown.bind(this);
    this.saveRegex = this.saveRegex.bind(this);
  }

  componentDidMount() {
    var quantStorage = {};

    for (var i = 0; i < this.state.cartQuantity; i++) {
      let rand = Math.ceil(Math.random() * 100);

      if (quantStorage[rand] === undefined) {
        quantStorage[rand] = 1;
      } else {
        quantStorage[rand]++;
      }
    }

    axios
      .post('/api/cart/', { items: Object.keys(quantStorage) })
      .then(({ data }) => {
        this.setState({ cartItems: data }, () =>
          console.log(this.state.cartItems)
        );
      })
      .catch((err) => console.error(err));
  }

  hideAllModals() {
    this.hideMainModal();
    this.hideLoginModal();
    this.hideSearches();
  }

  activateMainModal(active) {
    this.hideMainModal();
    this.hideLoginModal();

    //prettier-ignore
    axios
      .post('/api/navbar/', { title: active })
      .then(({ data }) =>
        this.setState({
          showMainModal: true,
          modalData: data[0]['category'],
          modalAdverts: data[0]['other'],
          modalClickables: data[0]['actions'],
          activeCategory: data[0]['title']
        }))
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
    //prettier-ignore
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

  saveRegex(regex) {
    this.setState({
      searchRegex: regex
    });
  }

  setCoords(coords) {
    this.setState({
      xCoords: coords
    });
  }

  render() {
    return (
      <div>
        <div id="navigation">
          <TopNav
            list={this.state.upperNav}
            classType={'topNavItems'}
            hideAllModals={this.hideAllModals}
          />
          <CentralNav
            userLoggedin={this.state.userLoggedin}
            cartQuantity={this.state.cartQuantity}
            lowerNav={this.state.lowerNav}
            activeCategory={this.state.activeCategory}
            activateMainModal={this.activateMainModal}
            activateLoginModal={this.activateLoginModal}
            activateCartModal={this.activateCartModal}
            activateSearches={this.activateSearches}
            searchDropdown={this.searchDropdown}
            hideAllModals={this.hideAllModals}
            saveRegex={this.saveRegex}
          />
        </div>
        {this.state.showMainModal ||
        this.state.showLoginModal ||
        this.state.showSearches ? (
          <div
            className="modalClose"
            onClick={(e) => {
              if (e.target.closest('div').className === 'modalClose') {
                this.hideAllModals();
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
            cartItems={this.state.cartItems}
            cartQuantity={this.state.cartQuantity}
            hideCartModal={this.hideCartModal}
            setCoords={this.setCoords}
            xCoords={this.state.xCoords}
          />
        ) : null}
        {this.state.showSearches ? (
          <SearchModal
            searchData={this.state.searchData}
            searchRegex={this.state.searchRegex}
          />
        ) : null}
      </div>
    );
  }
}

module.exports = App;
=======
// Dependencies
import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

// Components
import TopNav from './top-bar/TopNavBar';
import CentralNav from './main-bar/CentralNavBar';
import ModalContainer from './ModalContainer';
import Coronavirus from './Coronavirus';

// Redux
import { getCart } from '../redux/actions';

const mapStateToProps = (state) => ({
  cartQuantity: state.cart.cartQuantity
});

const mapDispatchToProps = (dispatch) => ({
  getCart: (payload) => dispatch(getCart(payload))
});
class App extends React.Component {
  componentDidMount = async () => {
    var quantStorage = {};

    for (var i = 0; i < this.props.cartQuantity; i++) {
      let rand = Math.ceil(Math.random() * 100);

      if (quantStorage[rand] === undefined) {
        quantStorage[rand] = 1;
      } else {
        quantStorage[rand]++;
      }
    }

    const { data } = await axios.post('/api/cart/', {
      items: Object.keys(quantStorage)
    });

    this.props.getCart(data);
  };

  render() {
    return (
      <React.Fragment>
        <div id="navigation">
          <TopNav />
          <CentralNav />
        </div>
        <ModalContainer />
        <Coronavirus />
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
>>>>>>> redux
