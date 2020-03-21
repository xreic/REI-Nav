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
    this.props.hidaAllModals();
    this.setState({
      colored: true
    }, () => this.props.activateSearches());
  }

  onSubmitHandler(e) {
    e.preventDefault();
    this.props.hidaAllModals();
    this.queryItems();

    axios
      .post('/api/searchbar/history', { search: this.state.productName })
      .then(() => {})
      .catch((err) => console.error(err));
  }

  queryItems() {
    if (this.state.productName !== '') {
      var newSplit = [];
      for (var item of this.state.productName.split(' ')) {
        newSplit.push(`(${item})`);
      }

      axios
        .post('/api/searchbar/', { productName: newSplit.join('(.*)') })
        .then(({ data }) => {
          if (data.length > 0) {
            this.props.searchDropdown(data);
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
