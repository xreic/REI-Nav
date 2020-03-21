import React from 'react';

const SearchHistory = ({ item, searchDropdownClick }) => {
  return (
    <li className="search3-Between" onClick={() => searchDropdownClick(item)}>
      {item}
    </li>
  );
};

module.exports = SearchHistory;
