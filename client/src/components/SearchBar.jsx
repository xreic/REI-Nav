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

  onChangeHandler(e) {
    this.setState(
      {
        productName: e.target.value
      },
      () => this.queryItems()
    );
  }

  onClickHandler() {
    this.props.hidaAllModals();
    this.setState(
      {
        colored: true
      },
      () => this.props.activateSearches()
    );
  }

  onSubmitHandler(e) {
    e.preventDefault();
    this.props.hidaAllModals();
    this.queryItems();
  }

  queryItems() {
    console.log('-------- SearchBar / Axios / Post / Start --------');

    if (this.state.productName !== '') {
      var newSplit = [];
      for (var item of this.state.productName.split(' ')) {
        newSplit.push(`(${item})`);
      }

      axios
        .post('/api/searchbar/', { productName: newSplit.join('(.*)') })
        .then(({ data }) => this.props.searchDropdown(data))
        .catch((err) => console.error(err));
    } else {
      this.props.searchDropdown([]);
    }
  }

  render() {
    return (
      <form className="navSearchForm" onSubmit={this.onSubmitHandler}>
        <input
          className="navSearchInput"
          placeholder="Search for great gear & clothing"
          onChange={this.onChangeHandler}
          onClick={this.onClickHandler}
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
