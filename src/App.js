import React from "react";
import styled from 'styled-components';
import './App.css';

import Card from './Card.js';
import useFetchData from './api/fetch.js';

const WrapperDiv = styled.div`
  padding: 20px;
  display: grid;
  gap: 10px;
  color: var(--text-color-1);

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat( calc( 100 / 2 ), 1fr);
  }

  @media screen and (min-width: 601px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat( calc( 100 / 3), 1fr);
  }

  @media screen and (min-width: 701px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat( calc( 100 / 4), 1fr);
  }

  @media screen and (min-width: 801px) {
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat( calc( 100 / 5), 1fr);
  }

  @media screen and (min-width: 1001px) {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat( calc( 100 / 6), 1fr);
  }

  @media screen and (min-width: 1201px) {
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat( calc( 100 / 7), 1fr);
  }

  @media screen and (min-width: 1401px) {
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat( calc( 100 / 8), 1fr);
  }

  @media screen and (min-width: 1601px) {
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: repeat( calc( 100 / 9), 1fr);
  }

  @media screen and (min-width: 1801px) {
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat( calc( 100 / 10), 1fr);
  }

  @media screen and (min-width: 2001px) {
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: repeat( calc( 100 / 11), 1fr);
  }

  @media screen and (min-width: 2201px) {
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat( calc( 100 / 12), 1fr);
  }

  @media screen and (min-width: 2401px) {
    grid-template-columns: repeat(13, 1fr);
    grid-template-rows: repeat( calc( 100 / 13), 1fr);
  }

  @media screen and (min-width: 2601px) {
    grid-template-columns: repeat(14, 1fr);
    grid-template-rows: repeat( calc( 100 / 14), 1fr);
  }

  @media screen and (min-width: 2801px) {
    grid-template-columns: repeat(15, 1fr);
    grid-template-rows: repeat( calc( 100 / 15), 1fr);
  }
`;

function App() {

  const data = useFetchData();

  return (
    <WrapperDiv onClick={() => {
      console.log('clicked');
    }}>
      {data && data.map((datum) => {
        return (
          <Card datum={datum}/>
        );
      })}
    </WrapperDiv>
  );
}

export default App;