import React from 'react';
import { gsap, timeline } from 'gsap';
import styled from 'styled-components';

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


class Card extends React.Component {

  constructor(props)  {
    super(props);
    // reference to the DOM node
    this.logoContainer = null;
    // reference to the animation
    this.logoTween = null;

    this.datum = props.datum;

    this.myRef = React.createRef();
  }

  componentDidMount(){
    // use the node ref to create the animation
    this.logoTween = gsap.timeline({ paused:true }).to(this.logoContainer, {x: 100, y: 100, duration: 1});
  }

  render() {
    return (

      <CardContainer onClick={() =>  this.logoTween.play()}>
        
        <Container>
          <p ref={div => this.logoContainer = div}>{this.datum.name}</p>
        </Container>

        <Container>
          <img src={this.datum.image} alt=""/>
        </Container>

        <Container>
          <p>{this.datum.current_price}</p>
        </Container>

      </CardContainer>

    );
  }
}


export default Card;