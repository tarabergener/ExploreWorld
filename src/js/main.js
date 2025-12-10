import './style.css'
import exploreLogo from './images/explore-logo.jpg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#header').innerHTML = `
  <div>
    <a href="index.html" target="_blank">
      <img src="${exploreLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Explore the World!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
