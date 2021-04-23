**Fetching the Data**

- [ ] In `App.js` (or where ever you wanted to fetch the data) add state for the data you'll be getting from NASA.
- [ ] Add an effect hook to handle the API call side effect.
- [ ] Go to the [NASA APOD API docs](https://api.nasa.gov/#apod) and read through the docs to see how to make the API call.
- [ ] You don't _need_ an API key. However you may need one if you exceed the API request limits.
- [ ] Using the endpoint given, fetch the data using `axios`.
- [ ] In your `.then()` make sure to `console.log` the response so you can look at the shape of the data. 😃
- [ ] Before you add your data to state, make sure your effect hook has a dependency array (probably empty, since we don't want this effect synced up to any state/props), otherwise you will start an **infinite loop, and you will exceed the API rate limits of the DEMO_KEY and need to use a real API_KEY.**

DEMO KEY rate limits:

> Hourly Limit: 30 requests per IP address per hour

> Daily Limit: 50 requests per IP address per day

_Note: if the photo url is NOT a photo, you will need to learn how to display a video in a React app on your own, OR just fetch the APOD from a different date by adding this to the back of the API endpoint: `&date=2012-03-14`_

**Adding the Data to State**

- [ ] Once you have made the call correctly, and logged the data, add the data to the state property you built.

**Display the Data**
Now is the time to build out your other components. Compose your UI, and then pass the data to your children components via props so you can render it on the DOM.

#### _MVP Requirements:_

- [ ] Use the effect hook to fetch the APOD data when the component mounts.
- [ ] Display the APOD data in different components that are composed together to build your UI.

