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

    const countHolder = createElement("div", { className: "countHolder" });

    const nav = createElement('nav', {}, [Home, Deck, Cards]);

    return createElement('header', {}, [appTitle, countHolder, nav]);
}

function imageHolder() {
    const heroImg = createElement("div", { class: "mainImage" });
    return heroImg;
}

function Footer() {
    const copyright = createElement('span', {
        textContent: `Copyright © ${new Date().getFullYear()}`,
    });

    const disclaimer = createElement("span", {
        textContent:
            "This is a student project"
    })

    return createElement('footer', {}, [copyright, disclaimer]);
}

function App() {
    const main = createElement('main', {}, []);

    initRouter(main);

    return createElement('div', { className: "allContent" }, [Header(main), main, imageHolder(), Footer()]);
}

export default App;
