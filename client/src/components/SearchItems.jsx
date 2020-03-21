import React from 'react';

const parse = (regex, item) => {
  let parsed = [];
  for (var regexTerm of item) {
    // if (item.)
  }
};

const SearchItems = ({ index, item, searchRegex }) => {
  if (index === 0) {
    parse(searchRegex, item);
  }
  return <li className="searchItems-Between">{item}</li>;
};

module.exports = SearchItems;
