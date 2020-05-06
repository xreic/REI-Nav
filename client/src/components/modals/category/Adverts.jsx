import React from 'react';

const Adverts = ({ index, item }) => {
  return (
    <li key={index}>
      <h4>{item}</h4>
    </li>
  );
};

export default Adverts;
