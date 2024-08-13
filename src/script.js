import { data } from "./emoji.js";
console.log(data);
console.log(data[0]);

const data100 = data[0];
console.log(data100);

const cardsWrapperNode = document.querySelector(".cards__wrapper");
cardsWrapperNode.innerHTML = ` <article class="card">
  <p class="card__symbol">${data[0].symbol}</p>
  <h3 class="card__title"> ${data[0].title}</h3>
  <p class="card__text">${data[0].keywords}</p>
  </article>`;
