const fetchData = () => {
  return new Promise((resolve, reject) => {
    fetch("https://api.weather.gov/gridpoints/OKX/35,35/forecast")
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};

displayData = (weather) => {
  console.log(weather.properties.periods[1]);
  document.getElementById(
    "anime-name"
  ).innerHTML = `Weather: ${weather.properties.periods[1].detailedForecast}`;
  document.getElementById(
    "anime-character"
  ).innerHTML = `Short Forecast: ${weather.properties.periods[1].shortForecast}`;
  document.getElementById(
    "anime-quote"
  ).innerHTML = `Temperature is ${weather.properties.periods[1].temperature} with a windspeed of ${weather.properties.periods[1].windSpeed}`;
};

document.getElementById("getQuotes").onclick = () => {
  fetchData().then(displayData);
};
