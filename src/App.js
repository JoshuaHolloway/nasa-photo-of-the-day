import React from "react";
import styled from 'styled-components';
import './App.css';

import Cards from './Cards.js';
import useFetchData from './api/fetch.js';

const WrapperDiv = styled.div`
  padding: 20px;
  display: grid;
  gap: 10px;
  color: var(--text-color-1);

  @media screen and (max-width: 700px) {
    
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(50, 1fr);
  }

  @media screen and (min-width: 701px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(25, 1fr);
  }
`;

function App() {

  const data = useFetchData();

  return (
    <WrapperDiv>
      {data && data.map((datum) => {
        return (
          <Cards datum={datum}/>
        );
      })}
    </WrapperDiv>
  );
}

export default App;