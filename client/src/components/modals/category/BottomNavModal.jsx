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
  if (activeCategory === 'Camp & Hike') {
    var catURL = 'camp_hike';
  } else {
    var catURL = activeCategory.toLowerCase();
  }

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
            <div className="modalSideOne">
              {activeCategory === 'More' ? null : (
                <img
                  className="fade-in"
                  src={`https://hrla35-fec-teamferrari-eric.s3.us-east-2.amazonaws.com/Images/Categories/${catURL}.png`}
                />
              )}
            </div>
            <ul className="modalSideTwo">
              {modalAdverts.map((item, index) => (
                <Adverts key={index} index={index} item={item} />
              ))}
            </ul>
            <ul className="modalSideThree">
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

export default NavModal;
