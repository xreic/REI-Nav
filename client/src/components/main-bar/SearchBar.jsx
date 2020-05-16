<<<<<<< HEAD
import React from 'react';
import axios from 'axios';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: '',
      colored: false
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.queryItems = this.queryItems.bind(this);
  }

  //prettier-ignore
  onChangeHandler(e) {
    this.setState({
      productName: e.target.value
    }, () => this.queryItems());
  }

  //prettier-ignore
  onClickHandler() {
    this.props.hideAllModals();
    this.setState({
      colored: true
    }, () => this.props.activateSearches());
  }

  onSubmitHandler(e) {
    e.preventDefault();
    this.props.hideAllModals();
    this.queryItems();

    axios
      .post('/api/searchbar/history', { search: this.state.productName })
      .then(() => {})
      .catch((err) => console.error(err));
  }

  queryItems() {
    if (this.state.productName !== '') {
      var newSplit = [];
      var jsRegex = [];

      var split = this.state.productName.split(' ');

      for (var i = 0; i < split.length; i++) {
        newSplit.push(`(${split[i]})`);

        if (split[i] !== '') {
          jsRegex.push(`${split[i]}`);
        }
      }

      axios
        .post('/api/searchbar/', { productName: newSplit.join('(.*)') })
        .then(({ data }) => {
          if (data.length > 0) {
            this.props.searchDropdown(data);
            this.props.saveRegex(jsRegex);
          }
        })
        .catch((err) => console.error(err));
    } else {
      this.props.searchDropdown([]);
    }
  }

  render() {
    return (
      <form className="navSearchForm" onSubmit={this.onSubmitHandler}>
        <input
          id="navSearchInput"
          className="navSearchInput"
          placeholder="Search for great gear & clothing"
          onChange={this.onChangeHandler}
          onClick={this.onClickHandler}
          autoComplete="off"
          spellCheck="false"
        />
        <button
          className={
            this.state.colored
              ? 'navSearchButton navSearchButtonGreen'
              : 'navSearchButton'
          }
        >
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </form>
    );
  }
}

module.exports = SearchBar;
=======
// Dependencies
import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

// Redux
import {
  setRegex,
  searchItems,
  showSearch,
  hideMain,
  hideLogin,
  hideCart
} from '../../redux/actions';

const mapDispatchToProps = (dispatch) => ({
  showSearch: () => dispatch(showSearch()),
  setRegex: (payload) => dispatch(setRegex(payload)),
  searchItems: (payload) => dispatch(searchItems(payload)),
  hideMain: async () => dispatch(hideMain()),
  hideLogin: async () => dispatch(hideLogin()),
  hideCart: async () => dispatch(hideCart())
});

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: '',
      colored: false
    };
  }

  onChangeHandler = (e) => {
    this.setState({ productName: e.target.value }, () => this.queryItems());
  };

  onClickHandler = async () => {
    await Promise.all([
      this.props.hideMain(),
      this.props.hideLogin(),
      this.props.hideCart()
    ]);
    this.setState({ colored: true }, () => this.props.showSearch());
  };

  onSubmitHandler = async (e) => {
    e.preventDefault();
    this.queryItems();

    await Promise.all([
      this.props.hideMain(),
      this.props.hideLogin(),
      this.props.hideCart()
    ]);
    await axios.post('/api/searchbar/history', {
      search: this.state.productName
    });
  };

  queryItems = async () => {
    if (this.state.productName !== '') {
      let newSplit = [];
      let jsRegex = [];

      let split = this.state.productName.split(' ');

      for (let i = 0; i < split.length; i++) {
        newSplit.push(`(${split[i]})`);

        if (split[i] !== '') {
          jsRegex.push(`${split[i]}`);
        }
      }

      const { data } = await axios.post('/api/searchbar/', {
        productName: newSplit.join('(.*)')
      });

      if (data.length > 0) {
        this.props.searchItems(data);
        this.props.setRegex(jsRegex);
      }
    } else {
      this.props.searchItems([]);
    }
  };

  render() {
    return (
      <form className="navSearchForm" onSubmit={this.onSubmitHandler}>
        <input
          id="navSearchInput"
          className="navSearchInput"
          placeholder="Search for great gear & clothing"
          onChange={this.onChangeHandler}
          onClick={this.onClickHandler}
          autoComplete="off"
          spellCheck="false"
        />
        <button
          className={
            this.state.colored
              ? 'navSearchButton navSearchButtonGreen'
              : 'navSearchButton'
          }
        >
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </form>
    );
  }
}

export default connect(null, mapDispatchToProps)(SearchBar);
>>>>>>> redux
