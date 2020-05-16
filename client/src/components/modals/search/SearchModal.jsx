<<<<<<< HEAD
import React from 'react';
import axios from 'axios';

import SearchHistory from './SearchHistory.jsx';
import SearchItems from './SearchItems.jsx';

class SearchModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: []
    };

    this.onClear = this.onClear.bind(this);
  }

  componentDidMount() {
    axios
      .get('/api/searchbar/history')
      .then(({ data }) => this.setState({ history: data }))
      .catch((err) => console.error(err));
  }

  onClear() {
    axios
      .delete('/api/searchbar/history')
      .then(() => console.log('Search history cleared.'))
      .catch((err) => console.error(err));

    this.props.hideSearches();
  }

  render() {
    if (this.props.searchData.length === 0) {
=======
// Dependencies
import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

// Components
import SearchHistory from './SearchHistory';
import SearchItems from './SearchItems';

// Redux
import { getHistory, clearHistory, hideSearch } from '../../../redux/actions';

const mapStateToProps = (state) => ({
  regex: state.search.regex,
  data: state.search.data,
  history: state.search.history
});

const mapDispatchToProps = (dispatch) => ({
  getHistory: (payload) => dispatch(getHistory(payload)),
  clearHistory: () => dispatch(clearHistory()),
  hideSearch: () => dispatch(hideSearch())
});

class SearchModal extends React.Component {
  componentDidMount = async () => {
    const { data } = await axios.get('/api/searchbar/history');
    this.props.getHistory(data);
  };

  onClear = async () => {
    await axios.delete('/api/searchbar/history');
    this.props.clearHistory();
    this.props.hideSearch();
  };

  render() {
    if (this.props.data.length === 0) {
>>>>>>> redux
      return (
        <div className="searchContainer">
          <div className="searchWrapper">
            <div className="searchLayout">
              <div className="searchContents">
<<<<<<< HEAD
                <ul className="searchItems">
                  <li
                    className="searchItems-First"
                    onClick={this.props.hideSearches}
                  >
                    Search History
                  </li>
                  {this.state.history.map((item, index) => (
                    <SearchHistory
                      key={index}
                      index={index}
                      item={item.search}
                    />
=======
                <ul className="searchHistory">
                  <li
                    className="searchItems-First"
                    onClick={this.props.hideSearch}
                  >
                    Search History
                  </li>
                  {this.props.history.map((item, index) => (
                    <SearchHistory key={index} item={item.search} />
>>>>>>> redux
                  ))}
                  <li className="searchItems-Last" onClick={this.onClear}>
                    Clear History
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="searchContainer">
          <div className="searchWrapper">
            <div className="searchLayout">
              <div className="searchContents">
                <ul className="searchItems">
<<<<<<< HEAD
                  {this.props.searchData.map((item, index) => (
                    <SearchItems
                      key={index}
                      item={item.productName}
                      searchRegex={this.props.searchRegex}
=======
                  {this.props.data.map((item, index) => (
                    <SearchItems
                      key={index}
                      item={item.productName}
                      productID={item.productID}
                      regex={this.props.regex}
>>>>>>> redux
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

<<<<<<< HEAD
module.exports = SearchModal;
=======
export default connect(mapStateToProps, mapDispatchToProps)(SearchModal);
>>>>>>> redux
