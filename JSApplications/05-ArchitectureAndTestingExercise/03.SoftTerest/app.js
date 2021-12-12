import createIdeaPage from "./pages/create-idea.js";
import dashoardPage from "./pages/dashboard.js";
import homePage from "./pages/home.js";
import ideaDetailsPage from "./pages/ideaDetails.js";
import loginPage from "./pages/login.js";
import nav from "./pages/nav.js";
import registerPage from "./pages/register.js";
import viewChanger from "./viewChanger.js";
import viewFinder from "./viewFinder.js";

setup();

async function setup(){
    let linkClass = 'link';
    let linkSelector = `.${linkClass}`;

    loginPage.initialize(document.getElementById('login-page'));
    registerPage.initialize(document.getElementById('register-page'));
    homePage.initialize(document.getElementById('home-page'), linkClass);
    createIdeaPage.initialize(document.getElementById('create-page'));
    ideaDetailsPage.initialize(document.getElementById('details-page'), linkClass);
    dashoardPage.initialize(document.getElementById('dashboard-holder'), linkClass);

    nav.initialize(document.querySelector('nav'));

    let appElement = document.getElementById('app');

    viewChanger.initialize(appElement, '.view');
    viewFinder.initialize(document.querySelectorAll(linkSelector), linkSelector, viewChanger.changeView);

    viewFinder.navigateTo('home');
}