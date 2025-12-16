import { getData } from "./productData.mjs";

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
