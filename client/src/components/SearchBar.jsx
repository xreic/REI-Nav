import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onSubmitHandler(e) {
    e.preventDefault();
    console.log('Search Button Click');
  }

  render() {
    return (
      <form className="navSearchForm" onSubmit={this.onSubmitHandler}>
        <input
          className="navSearchInput"
          placeholder="Search for great gear & clothing"
        />
        <button className="navSearchButton">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </form>
    );
  }
}

module.exports = SearchBar;
