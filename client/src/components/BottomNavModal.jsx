import React from 'react';

import Subcategories from './Subcategories.jsx';

const NavModal = ({ activeCategory, modalData }) => {
  modalData.map((item, index) => {
    console.log(item.subcategory);
    console.log(item.items);
    console.log('-----------------');
  });

  return (
    <div className="modalLayout">
      <div className="modalContent">
        <div className="modalCategory">
          <h3>{activeCategory}</h3>
        </div>
        <div className="modalSubCategories">
          <div className="modalSubCategory">
            {modalData.map((item, index) => (
              <Subcategories
                key={index}
                index={index}
                subcategorySet={item}
                activeCategory={activeCategory}
              />
            ))}
          </div>
          <div className="modalSideBar">
            <div className="modalSideUpper">
              <div className="modalSideUpperOne">
                <img src="https://picsum.photos/252/125" />
              </div>
              <div className="modalSideUpperTwo">Something</div>
            </div>
            <div className="modalSideLower">Something V2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

module.exports = NavModal;
