import { createElement, getLocalStorage, updateDeck } from "./utils.mjs";




function deck() {


  const title = createElement('h2', { textContent: 'Here is your Deck' })

  const deck = getLocalStorage("deck");

  const imageHolder = createElement("div", { className: "deckHolder" })

  const deckCount = createElement("span", {
    textContent: `Deck ${deck.length}/60`,
    id: "deckCount"
  })
  document.querySelector(".countHolder").innerHTML = ""

  document.querySelector(".countHolder").appendChild(deckCount)

  deck.forEach(card => {
    let img = createElement("img", { src: `${card.image}/high.webp` });

    let removeBtn = createElement("button", {
      textContent: "Remove",
      className: "deckButton",
    });

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


    const cardDiv = createElement("div", { className: "cardDiv" });

    cardDiv.appendChild(img);
    cardDiv.appendChild(removeBtn);


    imageHolder.appendChild(cardDiv);

  });







  return createElement("div", {}, [title, imageHolder]);

}



export default deck;