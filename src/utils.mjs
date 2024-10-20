export function getLocalStorage(key) {
    if (!localStorage.getItem("deck")) {
        localStorage.setItem("deck", "[]");
    }
    return JSON.parse(localStorage.getItem(key));
}

export function setLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

export function renderWithTemplate(template, parentElement, data, callback) {
    parentElement.insertAdjacentHTML("afterbegin", template);
    if (callback) {
        callback(data);
    }
}


export async function loadTemplate(path) {
    const html = await fetch(path);
    const template = await html.text();
    return template;
}

export async function loadHeaderFooter() {
    const headerTemplate = await loadTemplate("partials/header.html");
    const headerElement = document.querySelector("#main-header");
    const footerTemplate = await loadTemplate("partials/footer.html");
    const footerElement = document.querySelector("#main-footer");

    renderWithTemplate(headerTemplate, headerElement);
    renderWithTemplate(footerTemplate, footerElement);
}

export function initRouter(mainView) {

    function updateView(newView) {
        mainView.innerHTML = ""
        mainView.appendChild(newView);
    }

    mainView.innerHTML = "";
    window.addEventListener("hashchange", (event) => {

        const newURL = new URL(event);
        const hash = newURL.hast;

        switch (hash) {
            case "#/home":
                updateView();
                break;

            case "#/cards":
                break;

            case "#/deck":
                break;
        }

    })

}


export function createElement(type, props = {}, children = []) {
    const element = document.createElement(type);

    // props: {textContent: "Hello world!", id: "header1", "data-productId": 123, ...}
    Object.entries(props).forEach(([key, value]) => {
        if (~key.indexOf('-')) {
            element.setAttribute(key, value); // data attributes
        } else {
            element[key] = value;
        }
    });

    children.forEach((child) => {
        element.appendChild(child);
    });

    return element;
}