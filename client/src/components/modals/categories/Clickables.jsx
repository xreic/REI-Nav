import React from 'react';

const Clickables = ({ index, icon, top, bottom }) => {
  return (
    <li key={index}>
      <img
        className={`clickableImages ${icon}`}
        src={`./assets/${icon}.png`}
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

module.exports = Clickables;
