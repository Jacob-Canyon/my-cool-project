
import { createElement, setLocalStorage, getLocalStorage, updateDeck } from "./utils.mjs";


const baseURL = "https://api.tcgdex.net/v2/en/sets/"


function sets() {


  fetch(baseURL)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data)
      data.forEach(cardSet => {
        const setBtn = createElement("button", { textContent: cardSet.name, className: "set-button" })
        document.querySelector(".setHolder").appendChild(setBtn);


        setBtn.dataset.id = `${cardSet.id}`;

        setBtn.addEventListener("click", function (event) {
          const targetElement = event.target;
          var stingSet = targetElement.dataset.id

          displaySet(stingSet);
        });
      })
    }

    )
    .catch(error => {
      console.error('Error:', error);
    });


  return createElement("div", {});



}

function displaySet(set) {


  document.querySelectorAll(".card-list").forEach(el => el.remove());


  fetch(baseURL + set)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {

      data.cards.forEach(card => {

        let cardDiv = document.createElement("div");
        cardDiv.className = "card-list";

        let imgDiv = document.createElement("div");
        let dyanmicImage = document.createElement('img');
        imgDiv.appendChild(dyanmicImage);
        dyanmicImage.className = "card-img"
        dyanmicImage.alt = `Image of ${card.name}`

        let addbtnDiv = document.createElement("div");
        let addbtn = document.createElement("button");
        addbtn.className = "add-button";
        addbtnDiv.appendChild(addbtn);


        addbtn.addEventListener("click", function (event) {


          setLocalStorage("deck", card);

          updateDeck();
        });



        addbtn.innerText = "Add Card";

        dyanmicImage.src = `${card.image}/high.webp`;


        cardDiv.appendChild(imgDiv)
        cardDiv.appendChild(addbtnDiv);
        document.querySelector(".cardHolder").appendChild(cardDiv);
      })

    })
    .catch(error => {
      console.error('Error:', error);
    });

}





function cards() {


  const cardHolder = createElement("div", { className: "cardHolder" });

  const setHolder = createElement("div", { className: "setHolder" })

  const deck = getLocalStorage("deck");

  const deckCount = createElement("span", {
    textContent: `Deck ${deck.length}/60`,
    id: "deckCount"
  })

  document.querySelector(".countHolder").innerHTML = ""

  document.querySelector(".countHolder").appendChild(deckCount);



  return createElement('div', { className: "cardMain" }, [setHolder, sets(), cardHolder])

}



export default cards;
