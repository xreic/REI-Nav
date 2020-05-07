import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import TopNav from './top-bar/TopNavBar.jsx';
import CentralNav from './main-bar/CentralNavBar.jsx';
import ModalContainer from './ModalContainer.jsx';

// Redux
import { getCart, hideMain, hideLogin, hideSearch } from '../redux/actions.js';

const mapStateToProps = (state) => ({
  cartQuantity: state.cart.cartQuantity
});

const mapDispatchToProps = (dispatch) => ({
  getCart: (payload) => dispatch(getCart(payload)),
  hideMain: () => dispatch(hideMain()),
  hideLogin: () => dispatch(hideLogin()),
  hideSearch: () => dispatch(hideSearch())
});
class App extends React.Component {
  constructor(props) {
    super(props);

    //prettier-ignore
    this.state = {
      xCoords: 0,
      cartItems: [],
      showCartModal: false,

      showMainModal: false,
      modalData: [],
      modalAdverts: [],
      modalClickables: [],

      showLoginModal: false,
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

    this.hideAllModals = this.hideAllModals.bind(this);

    this.changeLogin = this.changeLogin.bind(this);
    this.retrieveUserdata = this.retrieveUserdata.bind(this);

    this.activateSearches = this.activateSearches.bind(this);
    this.hideSearches = this.hideSearches.bind(this);
  }

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

  hideAllModals() {
    this.hideMainModal();
    this.hideLoginModal();
    this.hideSearches();

    this.props.hideMain();
    this.props.hideLogin();
    this.props.hideSearch();
  }

  activateMainModal(active) {
    this.hideAllModals();

    axios
      .post('/api/navbar/', { title: active })
      .then(() => this.setState({ showMainModal: true }))
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

  render() {
    return (
      <React.Fragment>
        <div id="navigation">
          <TopNav hideAllModals={this.hideAllModals} />

          <CentralNav
            activateMainModal={this.activateMainModal}
            activateLoginModal={this.activateLoginModal}
            activateCartModal={this.activateCartModal}
            activateSearches={this.activateSearches}
            hideAllModals={this.hideAllModals}
            saveRegex={this.saveRegex}
          />
        </div>

        <ModalContainer hideAllModals={this.hideAllModals} />

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
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
