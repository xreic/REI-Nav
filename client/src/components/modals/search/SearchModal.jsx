// Dependencies
import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

// Components
import SearchHistory from './SearchHistory.jsx';
import SearchItems from './SearchItems.jsx';

// Redux
import {
  getHistory,
  clearHistory,
  hideSearch
} from '../../../redux/actions.js';

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
      return (
        <div className="searchContainer">
          <div className="searchWrapper">
            <div className="searchLayout">
              <div className="searchContents">
                <ul className="searchHistory">
                  <li
                    className="searchItems-First"
                    onClick={this.props.hideSearch}
                  >
                    Search History
                  </li>
                  {this.props.history.map((item, index) => (
                    <SearchHistory key={index} item={item.search} />
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
                  {this.props.data.map((item, index) => (
                    <SearchItems
                      key={index}
                      item={item.productName}
                      productID={item.productID}
                      regex={this.props.regex}
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchModal);
