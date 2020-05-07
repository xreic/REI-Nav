// Dependencies
import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

// Redux
import { setRegex, searchItems, showSearch } from '../../redux/actions';

const mapDispatchToProps = (dispatch) => ({
  showSearch: () => dispatch(showSearch()),
  setRegex: (payload) => dispatch(setRegex(payload)),
  searchItems: (payload) => dispatch(searchItems(payload))
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

  onClickHandler = () => {
    this.props.hideAllModals();
    this.setState({ colored: true }, () => this.props.showSearch());
  };

  onSubmitHandler = async (e) => {
    e.preventDefault();
    this.props.hideAllModals();
    this.queryItems();

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
