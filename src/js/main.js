import "../style/style.css";
import { accordion } from "./accordion.mjs";
import { getFlights } from "./flights.mjs";
import { getData } from "./productData.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();
accordion();
getFlights();

getData("flights").then((data) => {
  console.log("API DATA:", data);
});
