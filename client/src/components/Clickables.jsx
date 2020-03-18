import React from 'react';

const Clickables = ({ index, icon, top, bottom }) => {
  console.log(icon);
  return (
    <li className={icon} key={index}>
      <div className="clickableContainer">
        <p className="clickableTop">{top}</p>
        <br />
        <p className="clickableBottom">{bottom}</p>
      </div>
    </li>
  );
};

module.exports = Clickables;
