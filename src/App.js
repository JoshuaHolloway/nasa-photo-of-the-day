import React from "react";
import styled from 'styled-components';
import './App.css';
import dummy_data from './api/data.js';

import Cards from './Cards.js';
// import useFetchData from './api/fetch.js';

import { gsap } from "gsap";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip);

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

// function App() {
class App extends React.Component {

  constructor(props) {
    super(props);

    // this.data = useFetchData();
    this.data = dummy_data;

    // reference to the DOM node
    this.DOM_node_reference = null;

    // array to store the cards in
    this.array = [];
  }

  render() {
    return (
      <WrapperDiv 
        onClick={() => {
          console.log('clicked');
          console.log('this.array: ', this.array);

        }}
        ref={div => this.DOM_node_reference = div}
      >
        {this.data && this.data.map((datum) => {

          // push cards onto array
          this.array.push(<Cards/>);

          return (
            <Cards datum={datum}/>
          );
        })}
      </WrapperDiv>
    );
  }
}

export default App;