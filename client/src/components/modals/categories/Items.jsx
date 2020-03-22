import React from 'react';

const Items = ({ index, item }) => {
  return (
    <div className="modalMainLists" key={index}>
      <p>{item}</p>
    </div>
  );
};

module.exports = Items;
