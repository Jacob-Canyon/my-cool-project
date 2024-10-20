
import { createElement } from "./utils.mjs";

const apiUrl = 'https://api.tcgdex.net/v2/en/sets/swsh3/100'

function cardTemple() {

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      imageCard(data);

    })
    .catch(error => {
      console.error('Error:', error);
    });


}

function imageCard(card) {


  let dyanmicImage = document.createElement('img');
  let button = document.createElement("button");
  let cardImg = document.createElement("card");

  dyanmicImage.src = `${card.image}/high.webp`;
  button.innerText = "Add to Deck"
  button.class = "addBtn"

  cardImg.appendChild(dyanmicImage);
  cardImg.appendChild(button);

};





function cards() {
  const title = createElement('h2', { textContent: 'Page 1' });

  const page3Link = createElement('a', {
    href: '/#/cards',
    textContent: 'Link to Page 3',
  });

  cardTemple();

  return createElement('div', {}, [title, page3Link]);
}

export default cards;
