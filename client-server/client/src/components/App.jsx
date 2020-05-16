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
