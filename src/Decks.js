import { createElement, getLocalStorage, setLocalStorage } from "./utils.mjs";





function deck() {



  const title = createElement('h2', { textContent: 'Here is your Deck' })

  const deck = getLocalStorage("deck");

  const imageHolder = createElement("div", {})

  const deckCount = createElement("span", { textContent: `Deck ${deck.length}/60` })

  deck.forEach(card => {
    let img = createElement("img", { src: card });



    let removeBtn = createElement("button", { textContent: "Remove" });
    removeBtn.dataset.place = deck.indexOf(card);
    removeBtn.addEventListener("click", function (event) {
      const deck = getLocalStorage("deck");
      const targetElement = event.target;
      var removedCard = targetElement.dataset.place;

      const index = deck.indexOf(removedCard);
      if (index > -1) {
        deck.splice(index, 1);
      }

      setLocalStorage("deck", deck);





    });



    imageHolder.appendChild(img);
    imageHolder.appendChild(removeBtn);

  });

  console.log(imageHolder)





  return createElement("div", {}, [title, deckCount, imageHolder]);

}



export default deck;