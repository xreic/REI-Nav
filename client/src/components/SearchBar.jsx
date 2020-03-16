import React from 'react';
import axios from 'axios';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: ''
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  //prettier-ignore
  onChangeHandler(e) {
    this.setState({
      productName: e.target.value
    }, () => console.log(this.state))
  }

  //prettier-ignore
  onSubmitHandler(e) {
    e.preventDefault();
    console.log('-------- SearchBar / Axios / Post / Start --------');

    axios.post('/api/searchbar/', {})
      .then(({ data }) => console.log(data))
      .then(() => console.log('-------- SearchBar / Axios / Post / End --------'))
      .catch((err) => {console.error(err)});
  }

  render() {
    return (
      <form className="navSearchForm" onSubmit={this.onSubmitHandler}>
        <input
          className="navSearchInput"
          placeholder="Search for great gear & clothing"
          onChange={this.onChangeHandler}
        />
        <button className="navSearchButton">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </form>
    );
  }
}

module.exports = SearchBar;
