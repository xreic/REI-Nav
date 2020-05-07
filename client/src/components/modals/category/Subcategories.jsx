// Dependencies
import React from 'react';

// Components
import Items from './Items';

const Subcategories = ({ subcategorySet, active }) => {
  if (active !== 'More') {
    return (
      <div className="modalMainSubTitles">
        <p>{subcategorySet.subcategory}</p>
        {subcategorySet.items.map((item, index) => (
          <Items key={index} item={item} />
        ))}
      </div>
    );
  } else {
    return (
      <div className="modalMainSubTitles">
        <p>{subcategorySet.subcategory}</p>
      </div>
    );
  }
};

export default Subcategories;
