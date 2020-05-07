import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import TopNav from './top-bar/TopNavBar.jsx';
import CentralNav from './main-bar/CentralNavBar.jsx';
import BottomNavModal from './modals/category/BottomNavModal.jsx';
import LoginModal from './modals/login/LoginModal.jsx';
import CartModal from './modals/cart/CartModal.jsx';
import SearchModal from './modals/search/SearchModal.jsx';

// Redux
import { getCart } from '../redux/actions.js';

const mapDispatchToProps = (dispatch) => ({
  getCart: (query) => dispatch(getCart(query))
});
class App extends React.Component {
  constructor(props) {
    super(props);

    //prettier-ignore
    this.state = {
      cartQuantity: Math.floor(Math.random() * 7),
      xCoords: 0,
      cartItems: [],
      showCartModal: false,

      showMainModal: false,
      modalData: [],
      modalAdverts: [],
      modalClickables: [],

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

    this.props.getCart({ items: Object.keys(quantStorage) });

    axios
      .post('/api/cart/', { items: Object.keys(quantStorage) })
      .then(({ data }) => {
        this.setState({ cartItems: data });
      })
      .catch((err) => console.error(err));
  }

  hideAllModals() {
    this.hideMainModal();
    this.hideLoginModal();
    this.hideSearches();
  }

  activateMainModal(active) {
    this.hideAllModals();

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
          <TopNav hideAllModals={this.hideAllModals} />
          <CentralNav
            userLoggedin={this.state.userLoggedin}
            cartQuantity={this.state.cartQuantity}
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
            <BottomNavModal hideMainModal={this.hideMainModal} />
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
            hideSearches={this.hideSearches}
          />
        ) : null}
        <div className="coronaVirus">
          <div className="coronaVirusRNA">
            <p className="coronaVirusStrand1">{'COVID-19 UPDATE.'}</p>
            &nbsp;
            <p className="coronaVirusStrand2">
              {'REI stores are temporarily closed.'}
            </p>
            &nbsp;
            <p className="coronaVirusStrand3">
              {'Learn more on how to stay healthy and wash properly.'}
            </p>
            &nbsp;
            <p className="coronaVirusStrand4">
              {'🧼👏. Free standard shipping during this time.'}
            </p>
            &nbsp;
            <p className="coronaVirusStrand5">{'See details.'}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(App);
