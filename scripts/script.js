const bicycle = document.createElement("img");
const road = document.getElementById("road");
const numberOfBikes = 9;
let bike = 1;

const pickABike = () => {
  const randomBike = Math.floor(Math.random() * numberOfBikes);
  if (randomBike !== bike && randomBike !== 0) {
    bike = randomBike;
  } else if (bike < numberOfBikes) {
    bike++;
  } else {
    bike = 1;
  }

  bicycle.classList.add("road__bike");
  bicycle.setAttribute("src", `../img/bicycles/bike_${bike}.png`);
  road.appendChild(bicycle);
};

setInterval(pickABike, 6000);
