import React from 'react';

const Clickables = ({ index, icon, top, bottom }) => {
  return (
    <li key={index}>
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
