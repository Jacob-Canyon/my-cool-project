import {
    createElement
} from "./utils.mjs";

function home() {
    const title = createElement('h2', { textContent: 'Home' });

    const deckLink = createElement('a', {
        href: "/#/deck",
        textContent: "link to Deck page",
    })

    return createElement("div", [title, deckLink]);
}

export default home;