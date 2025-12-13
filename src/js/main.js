import "../style/style.css";
import { setupCounter } from "./counter.js";
import { getData } from "./productData.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

getData("flights").then((data) => {
  console.log("API DATA:", data);
});

setupCounter(document.querySelector("#counter"));
