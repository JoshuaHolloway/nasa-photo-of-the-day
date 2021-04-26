import React from "react";
import useMeasure from 'react-use-measure';
import styled from 'styled-components';
import './App.css';

import Card from './Card.js';
import useFetchData from './api/fetch.js';

const WrapperDiv = styled.div`
  padding: 20px;
  display: grid;
  gap: 10px;
  color: var(--text-color-1);

  @media screen and (max-width: 700px) {
    
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(50, 1fr);
  }

  @media screen and (min-width: 701px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(25, 1fr);
  }
`;

function App() {

  const [ref, bounds] = useMeasure();

  const data = useFetchData();

  const geometry = (l, t, w, h) => {
    const screen = window.screen;
    console.log(`left: ${l}, top: ${t}, width: ${w}, height: ${h}`);
    console.log(screen);
    
    const screen_center_x = screen.width / 2;
    const screen_center_y = screen.height / 2;

    console.log(`screen_center_x: ${screen_center_x}, screen_center_y: ${screen_center_y}`);
  };

  return (
    <WrapperDiv>

      {/* <MyComponent></MyComponent> */}

      {/* {data && data.map((datum) => {
        return (
          <div ref={ref} >
            <Card datum={datum} left={bounds.left} width={bounds.width}/>
          </div>
        );
      })} */}

      {data && (
        <div ref={ref} onClick={() => geometry(bounds.left, bounds.top, bounds.width, bounds.height)}>
          {/* <p>{bounds.left}</p> */}
          {/* <p>{bounds.width}</p> */}
          {/* <p>{bounds.height}</p> */}
          <Card datum={data[0]} 
            left={bounds.left} width={bounds.width} 
            top={bounds.top}   height={bounds.height}
            />
        </div>)  
      }

    </WrapperDiv>
  );
}

export default App;