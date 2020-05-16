<<<<<<< HEAD
import React from 'react';

const Clickables = ({ index, icon, top, bottom }) => {
  return (
    <li key={index}>
      <img
        className={`clickableImages ${icon}`}
        src={`https://hrla35-fec-teamferrari-eric.s3.us-east-2.amazonaws.com/Images/Other/${icon}.png`}
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
=======
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
>>>>>>> redux
