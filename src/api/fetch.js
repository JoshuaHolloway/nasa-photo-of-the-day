import {useState, useEffect} from "react";
import dummy_data from './data.js';


const useFetchData = () => {
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

export default useFetchData;