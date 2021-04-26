import React from 'react';
import { gsap, timeline } from 'gsap';
import styled from 'styled-components';
import './App.css';

const CardContainer = styled.div`
  background: var(--color-surface);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;

  border: solid 2px var(--color-secondary);
  border-radius: 10px;
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
    this.DOM_node_reference = null;
    // reference to the animation
    this.timeline = null;
    this.datum = props.datum;
    // this.myRef = React.createRef();
    this.state = {count: 0};
  }

  componentDidMount(){
    // use the node ref to create the animation
    this.timeline = gsap.timeline({ paused:true }).to(this.DOM_node_reference, {x: (375/2) - (162.5/2) - 20, y: (667/2) - (154.5/2) - 20, duration: 1});
    this.timeline.to(this.DOM_node_reference, {scale: 2});
  }

  render() {
    return (

        <CardContainer onClick={() => {
          if (this.state.count === 0)
            this.timeline.play();
          else
            this.timeline.reverse();

          this.state.count = (this.state.count + 1) % 2;
        }} ref={div => this.DOM_node_reference = div}>
          
          <Container>
            <p>{this.datum.name}</p>
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