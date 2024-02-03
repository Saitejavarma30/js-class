const fetchData = async () => {
  const response = await fetch(
    "https://api.weather.gov/gridpoints/OKX/35,35/forecast"
  );
  const weather = await response.json();
  console.log(weather);
  return weather;
};

const displayData = (weather) => {
  console.log(weather.properties.periods[1].detailedForecast);
  document.getElementById("displayData").innerHTML =
    weather.properties.periods[1].detailedForecast;
};

document.getElementById("weather").addEventListener("click", async () => {
  const weather = await fetchData();
  displayData(weather);
});
