import React from 'react';

import Subcategories from './Subcategories.jsx';
import Adverts from './Adverts.jsx';
import Clickables from './Clickables.jsx';

const NavModal = ({
  activeCategory,
  modalData,
  modalAdverts,
  modalClickables,
  hideMainModal
}) => {
  return (
    <div className="modalMainLayout">
      <div className="modalMainContent">
        <div className="modalMainCategory">
          <h3>{activeCategory}</h3>
          <span onClick={hideMainModal}>
            <p>✖</p>
          </span>
        </div>
        <div className="modalMainSubs">
          <div
            className={
              activeCategory === 'More'
                ? ' modalMainSubItem modalMainSubItemMini '
                : 'modalMainSubItem'
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
          <div className="modalMainSide">
            <div className="modalSideUpper">
              <div className="modalSideOne">
                <img src="https://i.picsum.photos/id/614/252/125.jpg" />
              </div>
              <ul className="modalSideTwo">
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
