import "../style/style.css";
import { accordion } from "./accordion.mjs";
import { getData } from "./productData.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();
accordion();

getData("flights").then((data) => {
  console.log("API DATA:", data);
});

setupCounter(document.querySelector("#counter"));
