import React from 'react';
import axios from 'axios';

class SearchHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: []
    };
  }

  render() {
    // hideSearches
    console.log('Search Data:', this.props.searchData);

    if (this.props.searchData.length === 0) {
      return (
        <div className="searchContainer">
          <div className="searchWrapper">
            <div className="search1">
              <div className="search2">
                <ul className="search3">
                  <li className="search3-First" onClick={this.props.hideSearches}>Search History</li>
                  <li className="search3-Between">Something V1</li>
                  <li className="search3-Between">Something V2</li>
                  <li className="search3-Last" onClick={this.props.hideSearches}>Clear History</li>
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
            <div className="search1">
              <div className="search2">Not Empty</div>
            </div>
          </div>
        </div>
      );
    }
  }
}

module.exports = SearchHistory;
