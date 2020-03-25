import React from 'react';

const parse = (regex, item) => {
  let itemLowerCase = item.toLowerCase();
  let storage = [];
  let parsed = '';

  for (let i = 0; i < regex.length; i++) {
    let slice = itemLowerCase.slice(
      0,
      itemLowerCase.indexOf(regex[i].toLowerCase())
    );

    storage.push(slice);
    itemLowerCase = itemLowerCase.replace(slice, '');
    itemLowerCase = itemLowerCase.replace(regex[i].toLowerCase(), '');

    if (i === regex.length - 1) {
      storage.push(itemLowerCase);
    }
  }

  for (let j = 0; j < storage.length; j++) {
    parsed += `<strong>${storage[j]}</strong>`;

    if (j !== storage.length - 1) {
      parsed += regex[j].toLowerCase();
    }
  }

  return parsed;
};

const SearchItems = ({ item, searchRegex }) => {
  return (
    <li
      className="searchItems-Between"
      dangerouslySetInnerHTML={{ __html: parse(searchRegex, item) }}
    />
  );
};

module.exports = SearchItems;
