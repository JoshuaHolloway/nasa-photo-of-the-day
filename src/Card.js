import React from 'react';
import { gsap } from 'gsap';
import styled from 'styled-components';
import {viewport_geometry, element_geometry, get_center_shifts} from './geometry.js';

const CardContainer = styled.div`
  height: 100%;

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
    this.DOM_node_reference = null; // reference to the DOM node
    this.timeline = null;           // reference to the animation
    this.datum = props.datum;
    this.state = {count: 0};
  }

  componentDidMount(){
    // use the node ref to create the animation
    this.timeline = gsap.timeline({ paused:true });     
  }

  do_zoom() {
    if (this.state.count === 0) {
      
      const {viewport_center_x, viewport_center_y, viewport_width, viewport_height} = viewport_geometry();
      const {x0, y0, w, h}      = element_geometry(this.DOM_node_reference);
      const {shift_x, shift_y}  = get_center_shifts(viewport_center_x, viewport_center_y, x0, y0);

      let s;
      const percent = 15;
      if (viewport_width < viewport_height) {// Scale smaller of two dimensions
        const final_gap = (percent/100)*viewport_width;
        s = (viewport_width - 2*final_gap) / w;
      }
      else {
        const final_gap = (percent/100)*viewport_height;
        s = (viewport_height - 2*final_gap) / h;
      }

      this.timeline.to(this.DOM_node_reference, {x: shift_x, y: shift_y}, '<');
      this.timeline.to(this.DOM_node_reference, {scale: s}, '<+0.1');
      this.timeline.play();
    }
    else
      this.timeline.reverse();

    this.state.count = (this.state.count + 1) % 2;
  }

  render() {
    return (

        <CardContainer 
          onClick={() => this.do_zoom()} 
          ref={div => this.DOM_node_reference = div}
        >
          
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