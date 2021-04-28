import React from 'react';
import styled from 'styled-components';
import MyComponent from './MyComponent.js';

const CardContainer = styled.div`
  /* background: green; */
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;

  border: solid 2px hotpink;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const f_click = () => {
  console.log('clicked!');
};

const Card = ({datum}) => {

  return (
    <CardContainer onClick={f_click}>
      
      <Container>
        <p>{datum.name}</p>
      </Container>

      <Container>
        <img src={datum.image} alt=""/>
      </Container>

      <Container>
        <p>{datum.current_price}</p>
      </Container>

    </CardContainer>
  );
};


export default Card;