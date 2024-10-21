import { createElement } from './utils';
import { initRouter } from './router';





function Header(mainDiv) {
    const appTitle = createElement('h1', {
        textContent: "Jake's Poke Deck Builder",
        className: 'heading',
    });

    // nav items
    const Home = createElement('a', {
        href: '/#/home',
        textContent: 'Home',
    });
    const Cards = createElement('a', {
        href: '/#/cards',
        textContent: 'Cards',
    });
    const Deck = createElement('a', {
        href: '/#/deck',
        textContent: 'Deck',
    });

    const nav = createElement('nav', {}, [Home, Deck, Cards]);

    return createElement('header', {}, [appTitle, nav]);
}

function imageHolder() {
    const heroImg = createElement("div", { class: "mainImage" });
    return heroImg;
}

function Footer() {
    const copyright = createElement('span', {
        textContent: `Copyright © ${new Date().getFullYear()}`,
    });

    const socialTags = createElement('img', {})
    socialTags.src = "/public/images/facebook_logo_primary.png"

    return createElement('footer', {}, [copyright]);
}

function App() {
    const main = createElement('main', {}, []);

    initRouter(main);

    return createElement('div', {}, [Header(main), main, Footer(), imageHolder()]);
}

export default App;
