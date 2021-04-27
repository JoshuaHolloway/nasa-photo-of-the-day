import React from "react";
import useMeasure from 'react-use-measure';
import styled from 'styled-components';
import './App.css';

import Card from './Card.js';
import useFetchData from './api/fetch.js';

const CardWrapper = styled.div`
  height: 100%;
`;

function Cards({datum}) {

  const [ref, bounds] = useMeasure();

  return (
    <CardWrapper ref={ref} >
        {/* {bounds.left} */}
        <Card datum={datum} 
          left={bounds.left} width={bounds.width} 
          top={bounds.top}   height={bounds.height}
        />
    </CardWrapper>
  );
}

export default Cards;