const do_fetch = () => {
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';
  fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log('Real fetch() data from API: ', data);
    // setup_filter_on_cards(data);
    // setup_zoom_on_cards(data);
  })
  .catch(error => console.error(error));
};

export default do_fetch;