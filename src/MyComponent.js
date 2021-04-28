import React from 'react';
import { gsap } from 'gsap';


class MyComponent extends React.Component {
  constructor(props){
    super(props);
    // reference to the DOM node
    this.myElement = null;
    // reference to the animation
    this.myTween = null;
  }

  componentDidMount(){
    // use the node ref to create the animation
    this.myTween = gsap.to(this.myElement, {x: 100, y: 100, duration: 1});
  }

  render(){
    //return <div ref={div => this.myElement = div} />;
    return (
      <div ref={div => this.myElement = div}>
        MyComponent.js
      </div>
    );
  }
}

export default MyComponent;