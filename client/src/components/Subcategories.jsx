import React from 'react';

const Subcategories = ({ index, subcategorySet }) => {
  return <ul className="modalSubTitles" key={index}>{subcategorySet.subcategory}</ul>;
};

module.exports = Subcategories;
