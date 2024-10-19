
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
  const cardImg = document.querySelector(".card");
  dyanmicImage.src = `${card.image}/high.webp`;
  button.innerText = "Add to Deck"
  button.class = "addBtn"

  cardImg.appendChild(dyanmicImage);
  cardImg.appendChild(button);

};



function renderListWithTemplate(templateFn, parentElement, list, position = "afterbegin", clear = false,) {
  const htmlStrings = list.map(templateFn);
  if (clear) {
    parentElement.innerHTML = "";
  }

  parentElement.insertAdjacentHTML(position, htmlStrings.join(""));
}

cardTemple();


