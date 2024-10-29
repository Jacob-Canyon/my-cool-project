import {
    createElement
} from "./utils.mjs";

const apiUrl = 'https://api.tcgdex.net/v2/en/cards/gym2-7';



function home() {

    const title = createElement("h2", { textContent: 'View your Deck or search for cards', className: "mainText" });

    const content = createElement("p", { textContent: "Welcome to my final project. It is an app to let you create your own virtual deck.", className: "mainText" })

    const deck = createElement("a", {
        href: "/#/deck",
        textContent: "Your Deck",
        className: "deckLink"
    });

    const cards = createElement("a", {
        href: "/#/cards",
        textContent: "Search Cards",
        className: "cardsLink"

    })




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

    function imageCard(data) {
        let dyanmicImage = document.createElement('img');

        dyanmicImage.src = `${data.image}/high.webp`;
        dyanmicImage.className = "homeImg"

        document.querySelector("main").appendChild(dyanmicImage);

        ;
    }

    return createElement('div', { className: "mainContent" }, [title, content, deck, cards]);
}

export default home;