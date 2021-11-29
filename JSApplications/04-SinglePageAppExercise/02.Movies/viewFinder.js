import auth from "./helpers/auth.js";
import homeMoviePage from "./pages/home.js";
import loginPage from "./pages/login.js";
import registerPage from "./pages/register.js";


let views = {
    'home': async () => await homeMoviePage.getView(),
    'login': async () => await loginPage.getView(),
    'register': async () => await registerPage.getView(),
    'logout': async () => { return await auth.logout(); },
};

function initialize(allLinkElements) {
    allLinkElements.forEach(a => a.addEventListener('click', changeViewHandler));
}

export async function changeViewHandler(e) {
    let route = e.target.dataset.route;
    navigateTo(route);
}

export async function navigateTo(route) {
    if (views.hasOwnProperty(route)) {
        let view = await views[route]();
        let appElement = document.getElementById('main');
        appElement.querySelectorAll('.view').forEach(v => v.remove());
        appElement.appendChild(view);
    }
}

export async function redirectTo(route) {
    if (views.hasOwnProperty(route)) {
        let viewFunc = await views[route]();
        return viewFunc;
    }
}

let viewFinder = {
    initialize,
    navigateTo,
    changeViewHandler,
    redirectTo
};

export default viewFinder;