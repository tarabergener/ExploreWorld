export function renderQuestionCard({ id, question, answers }) {
  //console.log("Rendering card:", id, question, answers);

  return `<div class=card-container">
        <div class=card>
        <form data-question-id="${id}>
        <h4 class="card-header">${question}</h4>
        <div class="card-body">
        ${answers
          .map(
            (answer, index) => `
          <label class="answer-option">
          <input
          type="radio"
          name="question-${id}"
          value="${answer.value}"
          required
          />
          ${answer.text}
          </label>
          `
          )
          .join("")}
        </div>
        <div class="card-footer">
        <button type="submit">Next</button>
        </div>
        </form>
        </div>
        </div>`;
}
