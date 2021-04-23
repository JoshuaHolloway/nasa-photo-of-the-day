import React from 'react';

const Card = (props) => {

  const name = props.name;

  return (
    <h1>
      {name}
    </h1>
  );
};


export default Card;