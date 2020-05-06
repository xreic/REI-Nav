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
      .then(() => {})
      .catch((err) => console.error(err));

    this.props.hideSearches();
  }

  render() {
    if (this.props.searchData.length === 0) {
      return (
        <div className="searchContainer">
          <div className="searchWrapper">
            <div className="searchLayout">
              <div className="searchContents">
                <ul className="searchHistory">
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
                  {this.props.searchData.map((item, index) => (
                    <SearchItems
                      key={index}
                      item={item.productName}
                      productID={item.productID}
                      searchRegex={this.props.searchRegex}
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

module.exports = SearchModal;
