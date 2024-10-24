import { createElement } from './utils';

import cards from './Cards';
import deck from './Decks';
import home from './home';

export function initRouter(mainView) {
    function updateView(newView) {
        mainView.innerHTML = "";
        mainView.appendChild(newView);
    }

    function hashToRoute(hash) {
        switch (hash) {
            case '#/home':
                updateView(home());
                break;

            case '#/cards':
                updateView(cards());
                break;

            case '#/deck':
                updateView(deck());
                break;


            default:
                updateView(createElement('h3', { textContent: '404 Page Not Found' }));
                break;
        }
    }

    const defaultHash = window.location.hash || '#/home';
    hashToRoute(defaultHash);

    window.addEventListener('hashchange', (evt) => {
        const newUrl = new URL(evt.newURL);
        const hash = newUrl.hash;

        hashToRoute(hash);
    });
}