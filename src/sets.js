
import { createElement } from "./utils.mjs";

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
            console.log(data);

        })
        .catch(error => {
            console.error('Error:', error);
        });


    const set1 = createElement('a', {
        href: '/#/cards',
        textContent: 'Baseset',
        data: "base1",
    });

    const set2 = createElement('a', {
        href: '/#/cards',
        textContent: 'Jungle',
    });

    const set3 = createElement('a', {
        href: '/#/cards',
        textContent: 'Fossil',
    });

    return createElement("div", {}, [set1, set2, set3])

}

export default sets;