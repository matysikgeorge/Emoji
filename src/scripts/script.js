import { data } from "./emoji.js";

const cardsWrapperNode = document.querySelector(".cards__wrapper");


// function карточки => отрисовка шаблона карточки

function createCard(arr) {
  const card = document.createElement("article"); // создаем тег article в div в документе html
  card.className = "card";  // присвоение класса 
  card.innerHTML = `<p class="card__symbol">${arr.symbol}</p>
                    <h3 class="card__title"> ${arr.title}</h3>   
                    <p class="card__text">${uniqueCard(arr.keywords)}</p>`;  // работаем по article
return card  
} // // создание шаблона карточки

// function render Карточек

//forEach, function expression create card(элемент из forEach) push с помощью метода append (куда и что) и вызов функции в аргумент данные data}

function cardRender(data) {
  data.forEach((element) => {
    const card = createCard(element); // - с помощью переменной card мы обращаемся к функции (createCard на 8 строчке к шаблону) в которой создали шаблон для карточек
    cardsWrapperNode.append(card)  //  (куда добавляем?) в нашу cardsWrapperNode (добавляем что?) - значение card (отсылает к каждому element функции - symbol, title, keywords), которое мы определили выше 
  });
}
cardRender(data);

// function оставить уникальные слова

function uniqueCard(str){
const arr = str.split(" ");
    const uniqueNum = [...new Set(arr)];
    return uniqueNum.join(" ");
}

// function по поиску эмодзи
