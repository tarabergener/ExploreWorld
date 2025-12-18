import "../style/style.css";
import { accordion } from "./accordion.mjs";
import { flightList, getFlights } from "./flights.mjs";
import { getData } from "./flightData.mjs";
import { loadHeaderFooter } from "./utils.mjs";
import { populateSelect } from "./booking.mjs";

loadHeaderFooter();
accordion();
getFlights();

document.addEventListener("DOMContentLoaded", () => {
  flightList("#tbody", "flights");
});

getData("flights").then((data) => {
  console.log("API DATA:", data);
});

populateSelect();
