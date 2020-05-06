import React from 'react';
import { connect } from 'react-redux';

import Subcategories from './Subcategories.jsx';
import Adverts from './Adverts.jsx';
import Clickables from './Clickables.jsx';

const mapStateToProps = (state) => ({
  active: state.main.active
});

const NavModal = ({
  active,
  activeCategory,
  modalData,
  modalAdverts,
  modalClickables,
  hideMainModal
}) => {
  if (active === 'Camp & Hike') {
    var catURL = 'camp_hike';
  } else {
    var catURL = active.toLowerCase();
  }

  return (
    <div className="modalMainLayout">
      <div className="modalMainContent">
        <div className="modalMainCategory">
          <h3>{active}</h3>
          <span onClick={hideMainModal}>
            <p>✖</p>
          </span>
        </div>
        <div className="modalMainSubs">
          <div
            className={
              active === 'More'
                ? ' modalMainSubItem modalMainSubItemMini '
                : 'modalMainSubItem'
            }
          >
            {modalData.map((item, index) => (
              <Subcategories
                key={index}
                index={index}
                subcategorySet={item}
                active={active}
              />
            ))}
          </div>
          <div className="modalMainSide">
            <div className="modalSideOne">
              {active === 'More' ? null : (
                <img
                  className="fade-in"
                  src={`/assets/categories/${catURL}.png`}
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

export default connect(mapStateToProps, null)(NavModal);
