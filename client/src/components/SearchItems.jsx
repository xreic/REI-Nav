import React from 'react';

const parse = (regex, item) => {
  let tempString = item.toLowerCase();
  let storage = [];
  let parsed = '';

  for (let i = 0; i < regex.length; i++) {
    let slice = tempString.slice(0, tempString.indexOf(regex[i]));

    storage.push(slice);
    tempString = tempString.replace(slice, '');
    tempString = tempString.replace(regex[i], '');

    if (i === regex.length - 1) {
      storage.push(tempString);
    }
  }

  for (let j = 0; j < storage.length; j++) {
    parsed += `<strong>${storage[j]}</strong>`;

    if (j !== storage.length - 1) {
      parsed += regex[j];
    }
  }

  return parsed;
};

const SearchItems = ({ index, item, searchRegex }) => {
  return (
    <li
      className="searchItems-Between"
      dangerouslySetInnerHTML={{ __html: parse(searchRegex, item) }}
    />
  );
};

module.exports = SearchItems;
