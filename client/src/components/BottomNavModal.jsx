import React from 'react';

import Subcategories from './Subcategories.jsx';
import Adverts from './Adverts.jsx';
import Clickables from './Clickables.jsx';

const NavModal = ({
  activeCategory,
  modalData,
  modalAdverts,
  modalClickables
}) => {
  return (
    <div className="modalLayout">
      <div className="modalContent">
        <div className="modalCategory">
          <h3>{activeCategory}</h3>
        </div>
        <div className="modalSubCategories">
          <div
            className={
              activeCategory === 'More'
                ? ' modalSubCategory modalSubCategoryMini '
                : 'modalSubCategory'
            }
          >
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
                <img src="https://i.picsum.photos/id/614/252/125.jpg" />
              </div>
              <ul className="modalSideUpperTwo">
                {modalAdverts.map((item, index) => (
                  <Adverts key={index} index={index} item={item} />
                ))}
              </ul>
            </div>
            <ul className="modalSideLower">
              {modalClickables.map((item, index) => (
                <Clickables
                  key={index}
                  index={index}
                  icon={item['icon']}
                  top={item['top']}
                  bottom={item['bottom']}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

module.exports = NavModal;
