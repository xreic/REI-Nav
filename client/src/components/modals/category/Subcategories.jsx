<<<<<<< HEAD
import React from 'react';

import Items from './Items.jsx';

const Subcategories = ({ index, subcategorySet, activeCategory }) => {
  if (activeCategory !== 'More') {
    return (
      <div className="modalMainSubTitles" key={index}>
        <p>{subcategorySet.subcategory}</p>
        {subcategorySet.items.map((item, index) => (
          <Items key={index} index={index} item={item} />
=======
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
>>>>>>> redux
        ))}
      </div>
    );
  } else {
    return (
<<<<<<< HEAD
      <div className="modalMainSubTitles" key={index}>
=======
      <div className="modalMainSubTitles">
>>>>>>> redux
        <p>{subcategorySet.subcategory}</p>
      </div>
    );
  }
};

<<<<<<< HEAD
module.exports = Subcategories;
=======
export default Subcategories;
>>>>>>> redux
