import React from 'react';

import Items from './Items.jsx';

const Subcategories = ({ index, subcategorySet, activeCategory }) => {
  if (activeCategory !== 'More') {
    return (
      <div className="modalMainSubTitles" key={index}>
        <p>{subcategorySet.subcategory}</p>
        {subcategorySet.items.map((item, index) => (
          <Items key={index} index={index} item={item} />
        ))}
      </div>
    );
  } else {
    return (
      <div className="modalMainSubTitles" key={index}>
        <p>{subcategorySet.subcategory}</p>
      </div>
    );
  }
};

module.exports = Subcategories;
