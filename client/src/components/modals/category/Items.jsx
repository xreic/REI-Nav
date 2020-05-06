import React from 'react';

const Items = ({ index, item }) => {
  return (
    <div className="modalMainLists" key={index}>
      <p>{item}</p>
    </div>
  );
};

export default Items;
