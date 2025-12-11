import "../style/style.css";
import { setupCounter } from "./counter.js";
import { getData } from "./productData.mjs";

getData("flights").then((data) => {
  console.log("API DATA:", data);
});

setupCounter(document.querySelector("#counter"));
