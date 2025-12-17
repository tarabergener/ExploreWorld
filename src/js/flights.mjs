import { getData } from "./flightData.mjs";
import { renderListWithTemplate } from "./utils.mjs";

export async function getFlights() {
  const data = await getData("flights");

  let tab = "";
  data.flights.forEach((flight) => {
    tab += `<tr>
            <td>${flight.date}</td>
            <td>${flight.departure.location}</td>
            <td>${flight.departure.time}</td>
            <td>${flight.arrival.location}</td>
            <td>${flight.arrival.time}</td>
        </tr>`;
  });
  document.getElementById("tbody").innerHTML = tab;
}

export function flightRowTemplate(flight) {
  return `<tr>
    <td>${flight.date}</td>
    <td>${flight.departure.location}</td>
    <td>${flight.departure.time}</td>
    <td>${flight.arrival.location}</td>
    <td>${flight.arrival.time}</td>
  </tr>`;
}

function filterResults(flights, criteria) {
  const sorted = [...flights];

  switch (criteria) {
    case "nameAsc":
      sorted.sort((a, b) =>
        a.arrival.location.localeCompare(b.arrival.location)
      );
      break;
    case "nameDesc":
      sorted.sort((a, b) =>
        b.arrival.location.localeCompare(a.arrival.location)
      );
      break;
    case "dateAsc":
      sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
      break;
    case "dateDesc":
      sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
      break;
  }
  return sorted;
}

export async function flightList(selector, category) {
  const el = document.querySelector(selector);
  const flightsData = await getData(category);
  const flights = flightsData.flights; // get the array

  // Initial render
  renderListWithTemplate(flightRowTemplate, el, flights);
  document.querySelector(".title").innerHTML = category;

  const dropdown = document.querySelector(".sortDropdown");
  if (dropdown) {
    dropdown.addEventListener("change", (e) => {
      const sorted =
        e.target.value === "default"
          ? flights
          : filterResults(flights, e.target.value);
      renderListWithTemplate(flightRowTemplate, el, sorted);
    });
  }
}
