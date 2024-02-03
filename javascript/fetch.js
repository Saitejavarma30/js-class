const fetchData = () => {
  return new Promise((resolve, reject) => {
    fetch("https://api.weather.gov/gridpoints/OKX/35,35/forecast")
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};

displayData = (weather) => {
  console.log(weather.properties.periods[1].detailedForecast);
  document.getElementById("displayData").innerHTML =
    weather.properties.periods[1].detailedForecast;
};

document.getElementById("weather").onclick = () => {
  fetchData().then(displayData);
};
