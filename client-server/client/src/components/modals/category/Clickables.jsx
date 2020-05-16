import React from 'react';

const Clickables = ({ icon, top, bottom }) => {
  return (
    <li>
      <img
        className={`clickableImages ${icon}`}
        src={`/assets/other/${icon}.png`}
        alt={icon}
      />
      <div className="clickableContainer">
        <p className="clickableTop">{top}</p>
        <br />
        <p className="clickableBottom">{bottom}</p>
      </div>
    </li>
  );
};

export default Clickables;
