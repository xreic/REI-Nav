// Dependencies
import React from 'react';
import { connect } from 'react-redux';

// Components
import Subcategories from './Subcategories';
import Adverts from './Adverts';
import Clickables from './Clickables';

// Redux
import { hideMain } from '../../../redux/actions.js';
const mapStateToProps = (state) => ({
  active: state.main.active,
  data: state.main.data,
  adverts: state.main.adverts,
  clickables: state.main.clickables
});

const mapDispatchToProps = (dispatch) => ({
  hideMain: () => dispatch(hideMain())
});

const NavModal = ({ active, data, adverts, clickables, hideMain }) => (
  <div className="modalMainLayout">
    <div className="modalMainContent">
      <div className="modalMainCategory">
        <h3>{active}</h3>
        <span onClick={hideMain}>
          <p>✖</p>
        </span>
      </div>
      <div className="modalMainSubs">
        <div
          className={
            active === 'More'
              ? 'modalMainSubItem modalMainSubItemMini'
              : 'modalMainSubItem'
          }
        >
          {data.map((item, index) => (
            <Subcategories key={index} subcategorySet={item} active={active} />
          ))}
        </div>
        <div className="modalMainSide">
          <div className="modalSideOne">
            {active === 'More' ? null : (
              <img
                className="fade-in"
                src={`/assets/categories/${
                  active === 'Camp & Hike' ? 'camp_hike' : active.toLowerCase()
                }.png`}
              />
            )}
          </div>
          <ul className="modalSideTwo">
            {adverts.map((item, index) => (
              <Adverts key={index} item={item} />
            ))}
          </ul>
          <ul className="modalSideThree">
            {clickables.map((item, index) => (
              <Clickables
                key={index}
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

export default connect(mapStateToProps, mapDispatchToProps)(NavModal);
