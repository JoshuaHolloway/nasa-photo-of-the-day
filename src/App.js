import dummy_data from './api/data.js';
import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import './App.css';
import Card from './Card.js';

const WrapperDiv = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

const BlueH1 = styled.div`
  color: blue;
`;

function useFetchData() {
  const [data, f_updateData] = useState(null);
  useEffect(() => {
    // const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';
    // fetch(url)
    // .then(response => response.json())
    // .then(d => {
    //   console.log('Real fetch() data from API: ', d);
    //   f_updateData(d);
    // })
    // .catch(e => console.log(e));
    f_updateData(dummy_data);
  }, []);

  return data;
}

function App() {

  const data = useFetchData();

  return (
    <WrapperDiv>

        <BlueH1>
          {data && data.map((datum) => {
            console.log(datum);
            return (
              <Card name={datum.name}/>
            );
          })}
        </BlueH1>
    </WrapperDiv>
  );
}

export default App;