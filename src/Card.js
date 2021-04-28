import React from 'react';
import { gsap, timeline } from 'gsap';
import styled from 'styled-components';
import './App.css';

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
    // reference to the DOM node
    this.DOM_node_reference = null;
    // reference to the animation
    this.timeline = null;
    this.datum = props.datum;
    // this.myRef = React.createRef();
    this.state = {count: 0};

    this.left = props.left;
    this.width = props.width;
    this.top = props.top;
    this.height = props.height;
  }

  componentDidMount(){

    const screen = window.screen;
    // console.log(screen);
    
    const screen_center_x = screen.width / 2;
    const screen_center_y = screen.height / 2;
    // console.log(`screen_center_x: ${screen_center_x}, screen_center_y: ${screen_center_y}`);

    
    const x1 = this.left;
    const y1 = this.top;
    const width = this.width;
    const height = this.height;
    const x0 = x1 + (width/2);
    const y0 = y1 + (height/2);
    
    // console.log(`x0: ${x0},  width: ${width}`);
    
    
    // [0, 0]
    //const x_shift = screen_center_x - (width/2) - 20;

    let x_shift;
    
    if (screen_center_x > x0)
      x_shift = screen_center_x - x0;
    else
      x_shift = -(x0 - screen_center_x);

    let y_shift;
    if (screen_center_y > y0)
      y_shift = screen_center_y - y0;
    else
      y_shift = -(y0 - screen_center_y);
    


    // const y_shift = screen_center_y - (154/2) - 20;


    // use the node ref to create the animation
    this.timeline = gsap.timeline({ paused:true });
    this.timeline.to(this.DOM_node_reference, {x: x_shift, y: y_shift, duration: 1});

    const screen_width = screen.width; // iPhone 6/7/8
    const final_gap = 0;
    const element_width = width;

    const scale = (screen_width - 2*final_gap) / (element_width);
    this.timeline.to(this.DOM_node_reference, {scale: scale});

    // const screen_height = 667; // iPhone 6/7/8
    // const expanded_height = screen_height - (2*final_gap + y_shift);
    // const expanded_height = scale * screen_width - 1*final_gap;
    // this.timeline.to(this.DOM_node_reference, {height: expanded_height});


     
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