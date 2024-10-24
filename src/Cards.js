
import { createElement, setLocalStorage } from "./utils.mjs";


const baseURL = "https://api.tcgdex.net/v2/en/sets/"

const set = "base1"
function sets() {

  const set1 = createElement('button', {
    textContent: 'Base Set',
  });

  set1.dataset.set = "base1";

  set1.addEventListener("click", function (event) {
    const targetElement = event.target;
    var stingSet = targetElement.dataset.set
    console.log(stingSet);
    displaySet(stingSet);
  });




  const set2 = createElement('button', {

    textContent: 'Jungle',
    data: "base2",
  });

  set2.dataset.set = "base2";

  set2.addEventListener("click", function (event) {
    const targetElement = event.target;
    var stingSet = targetElement.dataset.set
    console.log(stingSet);
    displaySet(stingSet);
  });


  const set3 = createElement('button', {
    textContent: 'Fossil',
    data: "base3",
  });

  set3.dataset.set = "base3";

  set3.addEventListener("click", function (event) {
    const targetElement = event.target;
    var stingSet = targetElement.dataset.set
    console.log(stingSet);
    displaySet(stingSet);
  });



  return createElement("div", {}, [set1, set2, set3])

}

function displaySet(set) {


  document.querySelectorAll(".card").forEach(el => el.remove());


  fetch(baseURL + set)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {

      data.cards.forEach(card => {

        let cardDiv = document.createElement("div")
        cardDiv.className = "card"

        let dyanmicImage = document.createElement('img');

        let addbtn = document.createElement("button");
        addbtn.dataset.id = `${card.image}/high.webp`;




        addbtn.addEventListener("click", function (event) {
          const targetElement = event.target;
          var stingLink = targetElement.dataset.id
          console.log(stingLink)
          setLocalStorage("deck", stingLink);
        });

        addbtn.innerText = "Add Card";

        dyanmicImage.src = `${card.image}/high.webp`;

        cardDiv.appendChild(dyanmicImage)
        cardDiv.appendChild(addbtn);
        document.querySelector("main").appendChild(cardDiv);
      })

    })
    .catch(error => {
      console.error('Error:', error);
    });

}





function cards() {
  const title = createElement('h2', { textContent: 'Card Sets' });






  return createElement('div', {}, [title, sets()])

}



export default cards;
