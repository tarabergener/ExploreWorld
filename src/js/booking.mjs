import { getData } from "./flightData.mjs";

let flightsData = [];

export async function populateSelect() {
  const data = await getData("flights");
  flightsData = data.flights;

  const selectElement = document.getElementById("select");

  selectElement.innerHTML = `<option value="">Select destination</option>`;

  flightsData.forEach((flight, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = flight.arrival.location;
    selectElement.appendChild(option);
  });

  selectElement.addEventListener("change", handleSelection);
}

function handleSelection(event) {
  const selectedIndex = event.target.value;
  if (selectedIndex === "") return;

  const flight = flightsData[selectedIndex];

  document.getElementById("date").value = flight.date;

  document.getElementById("departure").value = flight.departure.location;

  document.getElementById("departure-time").value = flight.departure.time;

  document.getElementById("arrival").value = flight.arrival.location;

  document.getElementById("arrival-time").value = flight.arrival.time;

  document.getElementById("price").value = flight.price;
}
