import React from "react";
import styled from 'styled-components';
import './App.css';
import Card from './Card.js';

// const CardWrapper = styled.div`
//   height: 100%;
// `;

// function Cards({datum}) {
class Cards extends React.Component {

  constructor(props)  {
    super(props);

    this.datum = props.datum;
  } // constructor()

  render () {
    return (
    // <CardWrapper >
        <Card datum={this.datum} />
    // </CardWrapper>
    ); // return()
  } // render()
} // class Cards {}

export default Cards;