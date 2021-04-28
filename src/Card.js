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
    // use the node ref to create the animation
    this.timeline = gsap.timeline({ paused:true });     
  }

  render() {
    return (

        <CardContainer onClick={() => {

          // ========================================

          const viewport_geometry = () => {

            const viewport_width = window.innerWidth;
            const viewport_height = window.innerHeight;
            const viewport_center_x = viewport_width / 2;
            const viewport_center_y = viewport_height / 2;

            const document_height1 = document.documentElement.offsetHeight;
            const document_height2 = document.documentElement.getBoundingClientRect().height;
            const scroll_offset = window.scrollY;

            // console.log(`scroll_offset: ${scroll_offset}`);
            // console.log(`document_height1 = ${document_height1},   document_height2 = ${document_height2}`);
            // console.log(`viewport_height: ${viewport_height}`);

            return {viewport_center_x, viewport_center_y, viewport_width, viewport_height};
          };

          // ========================================

          const element_geometry = (elem) => {

            const square_geometry = elem.getBoundingClientRect(); 
            console.clear();
            console.log('square_geometry: ', square_geometry);
            
            const w = square_geometry.width;
            const h = square_geometry.height;
            const x1 = square_geometry.left;
            const y1 = square_geometry.top;
            const x0 = x1 + w/2;
            const y0 = y1 + h/2;

            // console.log('scrollTop: ', elem.scrollTop);
            // console.log('offsetTop: ', elem.offsetTop, ',    offsetParent: ', elem.offsetParent);
            // console.log('offsetParent: ', elem.offsetParent);

            return {x0, y0, x1, y1, w, h};
          };

          // ========================================

          const get_center_shifts = (viewport_center_x, viewport_center_y, x0, y0) => {
            let shift_x, shift_y;

            if (viewport_center_x > x0)
              shift_x = viewport_center_x - x0;
            else
              shift_x = -(x0 - viewport_center_x);

            if (viewport_center_y > y0)
              shift_y = viewport_center_y - y0;
            else
              shift_y = -(y0 - viewport_center_y);

            return {shift_x, shift_y};
          };

          // ========================================

          const {viewport_center_x, viewport_center_y, viewport_width, viewport_height} = viewport_geometry();
          const {x0, y0, w, h} = element_geometry(this.DOM_node_reference);
          const {shift_x, shift_y} = get_center_shifts(viewport_center_x, viewport_center_y, x0, y0);


          if (this.state.count === 0) {
            this.timeline.to(this.DOM_node_reference, {x: shift_x, y: shift_y}, '<');
            this.timeline.play();
          }
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