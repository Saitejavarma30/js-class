const fetchData = () => {
  return new Promise((resolve, reject) => {
    fetch("https://shikimori.one/api/animes?limit=10&page=6")
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};

const leftContent = (data) => {
  const left = document.createElement("div");
  left.classList.add("left");
  const img = document.createElement("img");
  img.classList.add("image");
  img.src = `https://shikimori.one${data_item?.image?.preview}`;
  left.appendChild(img);
  return left;
};

const rightContent = (data) => {
  const right = document.createElement("div");
  right.classList.add("right");

  //anime name
  const animeName = document.createElement("div");
  animeName.classList.add("anime-name");
  animeName.innerHTML = data.name;

  //episodes
  const episodes = document.createElement("div");
  episodes.classList.add("episodes");
  episodes.innerHTML = `Total Episodes: ${data.episodes}`;

  //aired on and release date
  const airedOn = document.createElement("div");
  airedOn.classList.add("aired-on");
  airedOn.innerHTML = data.aired_on
    ? `Lates episode aired on ${data.aired_on}`
    : `The anime has not yet been aired on TV`;

  //release date
  const releaseOn = document.createElement("div");
  releaseOn.classList.add("released-on");
  releaseOn.innerHTML = data.released_on
    ? `Anime Released on ${data.released_on}`
    : `The anime has not yet been released`;

  //episodes that are aired count
  const episodesAired = document.createElement("div");
  episodesAired.classList.add("episodes-aired");
  episodesAired.innerHTML = `Total episodes Aired: ${data.episodes_aired}`;
  const rating = document.createElement("div");

  right.appendChild(animeName);
  right.appendChild(episodes);
  right.appendChild(airedOn);
  right.appendChild(releaseOn);
  right.appendChild(episodesAired);

  return right;
};

displayData = (data) => {
  const jumbotron = document.querySelector(".temp");

  for (data_item of data) {
    const card = document.createElement("div");
    card.classList.add("card");
    const left = leftContent(data_item);
    card.appendChild(left);
    const right = rightContent(data_item);
    card.appendChild(right);
    jumbotron.appendChild(card);
  }
};

document.getElementById("getQuotes").onclick = () => {
  fetchData().then(displayData);
};
