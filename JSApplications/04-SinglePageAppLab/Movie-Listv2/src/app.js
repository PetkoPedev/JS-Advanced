import { isAuthenticated } from './auth.js';
import loginPage from './loginPage.js';
import moviesPage from './moviesPage.js';
import registerPage from './registerPage.js';
import navigation from './navigation.js';

let headerElement = document.querySelector('.header .nav');

let pages = {
    'register': registerPage,
    'login': loginPage,
    'movies': moviesPage
}


if (isAuthenticated()) {
    moviesPage.showPage();
}

headerElement.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.tagName == 'A') {
        let datalink = e.target.getAttribute('data-link');
        navigation.updateNavigation();

        if (Object.keys(pages).includes(datalink)) {
            hidePages();
            let currentView = pages[datalink];

            currentView.showPage();
        }
    }
})

function hidePages() {
    Object.values(pages).forEach(x => x.hidePage());
}