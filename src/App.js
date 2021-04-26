import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import './App.css';

import Card from './Card.js';
import useFetchData from './api/fetch.js';

const WrapperDiv = styled.div`

  display: grid;

  @media screen and (max-width: 700px) {
    background: blue;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(50, 1fr);
  }

  @media screen and (min-width: 701px) {
    background: yellow;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(25, 1fr);
  }
`;


function App() {

  const data = useFetchData();

  return (
    <WrapperDiv>
  
      {/* <MyComponent></MyComponent> */}

      {data && data.map((datum) => {
        return (
          <Card datum={datum}/>
        );
      })}

    </WrapperDiv>
  );
}

export default App;