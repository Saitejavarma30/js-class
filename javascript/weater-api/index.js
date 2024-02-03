/*fetch is a function built into javascript that is used to get the data intoo the API. 
The url decides where to send the request. It needs more than just an URl. 
It also takes a request object and response object. It also need to know method of the request, 
headers of the request. However if we just gve the url, it sends the url with all the other fields are
set to default

fetch(request, response)

request {
  url: "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY",
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
}

*/
/*
    Response Object is what we get from thr fetch. As Fetch is a sync function and hence it returns a promise.

     */
//   fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
//   .then((res) => res.json())
//   .then((data) => resolve(data))
//   .catch((err) => reject(err));
// });

const fetchData = () => {
  return new Promise((resolve, reject) => {
    fetch("https://api.weather.gov/gridpoints/OKX/35,35/forecast")
      .then((res) => res.json())
      .then((data) => resolve(data));
    // .catch((err) => reject(err));
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
