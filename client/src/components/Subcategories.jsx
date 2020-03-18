import React from 'react';

import Items from './Items.jsx';

const Subcategories = ({ index, subcategorySet }) => {
  return (
    <div className="modalSubTitles" key={index}>
      <p>{subcategorySet.subcategory}</p>
      {subcategorySet.items.map((item, index) => (
        <Items key={index} index={index} item={item} />
      ))}
    </div>
  );
};

module.exports = Subcategories;
