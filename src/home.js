import {
    createElement
} from "./utils.mjs";

const apiUrl = 'https://api.tcgdex.net/v2/en/cards/swsh3-136';

function home() {

    const title = createElement('h2', { textContent: 'View your Deck or sreach for cards' });

    const deck = createElement('a', {
        href: '/#/deck',
        textContent: 'Your Deck',
    });




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

        document.querySelector("main").appendChild(dyanmicImage);

        ;
    }

    return createElement('div', {}, [title, deck]);
}

export default home;