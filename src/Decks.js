import { createElement, getLocalStorage, setLocalStorage } from "./utils.mjs";


function updateDeck() {

  const deck = getLocalStorage("deck");

  const deckCount = document.getElementById("deckCount")
  deckCount.innerText = `Deck ${deck.length}/60`

}


function deck() {



  const title = createElement('h2', { textContent: 'Here is your Deck' })

  const deck = getLocalStorage("deck");

  const imageHolder = createElement("div", {})

  const deckCount = createElement("span", {
    textContent: `Deck ${deck.length}/60`,
    id: "deckCount"
  })

  deck.forEach(card => {
    let img = createElement("img", { src: `${card.image}/high.webp` });



    let removeBtn = createElement("button", { textContent: "Remove" });

    removeBtn.dataset.id = card.id;


    removeBtn.addEventListener("click", function (event) {
      const modifiedDeck = getLocalStorage("deck");
      const targetElement = event.target;
      const dataset = targetElement.dataset.id;
      const index = modifiedDeck.findIndex(el => el.id == dataset)



      if (index !== -1) {
        modifiedDeck.splice(index, 1)

      }

      localStorage.setItem("deck", JSON.stringify(modifiedDeck));


      targetElement.parentElement.remove();
      updateDeck();


    });

    const cardDiv = createElement("div", {})



    cardDiv.appendChild(img);
    cardDiv.appendChild(removeBtn);

    imageHolder.appendChild(cardDiv);

  });







  return createElement("div", {}, [title, deckCount, imageHolder]);

}



export default deck;