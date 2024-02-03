const fetchData = () => {
  return new Promise((resolve, reject) => {
    fetch("https://animechan.xyz/api/random")
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};

displayData = (data) => {
  console.log(data);
  document.getElementById("anime-name").innerHTML = `Anime: ${data.anime}`;
  document.getElementById(
    "anime-character"
  ).innerHTML = `Character: ${data.character}`;
  document.getElementById("anime-quote").innerHTML = `${data.quote}`;
};

document.getElementById("getQuotes").onclick = () => {
  fetchData().then(displayData);
};
