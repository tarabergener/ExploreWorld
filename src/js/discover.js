import { renderQuestionCard } from "./cards.mjs";

const app = document.getElementById("app");
let survey = [];
let currentQuestion = 0;
const answers = [];

async function showQuestion() {
  if (!survey.length) {
    const response = await fetch(`/src/public/json/survey.json`);
    const data = await response.json();
    survey = data.survey;
  }
  app.innerHTML = renderQuestionCard(survey[currentQuestion]);
}

app.addEventListener("submit", (e) => {
  e.preventDefault();

  const form = e.target;
  const value = form.querySelector("input:checked").value;

  answers.push(Number(value));
  currentQuestion++;

  if (currentQuestion < survey.length) {
    showQuestion();
  } else {
    showResult();
  }
});

function getRandomDestination(categoryArray) {
  const randomIndex = Math.floor(Math.random() * 3);
  //console.log("Random destination:", categoryArray[randomIndex]);
  return categoryArray[randomIndex];
}

async function showResult() {
  const score = answers.reduce((sum, v) => sum + v, 0);

  const response = await fetch(`/src/public/json/survey.json`);
  const data = await response.json();
  const result = data.results;
  //console.log(result);

  let category = [];
  if (score <= 4) category = result.category1;
  else if (score <= 6) category = result.category2;
  else if (score <= 8) category = result.category3;
  else if (score <= 10) category = result.category4;
  else category = result.category5;

  const destination = getRandomDestination(category);

  app.innerHTML = `
    <div class="card result-card">
    <h3>Your Results</h3>
    <p>${destination.name}</p>
    <img src="${destination.image}" alt"${destination.name}" style="width=100%; border-radius:10px;">
    <p class="booking-link"><a href="/src/product.html">Book your vacation today!</a></p>
    </div>
    `;
}

showQuestion();
