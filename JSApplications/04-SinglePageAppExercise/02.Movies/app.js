import addMoviePage from "./pages/addMovie.js";
import editMoviePage from "./pages/editMovie.js";
import homeMoviePage from "./pages/home.js";
import loginPage from "./pages/login.js";
import movieDetailsPage from "./pages/movieDetails.js";
import registerPage from "./pages/register.js";
import viewFinder from "./viewFinder.js";

setup();

async function setup(){
    let appElement = document.getElementById('main');

    loginPage.initialize(document.getElementById('form-login'));
    registerPage.initialize(document.getElementById('form-sign-up'));
    homeMoviePage.initialize(document.getElementById('home-page'));
    addMoviePage.initialize(document.getElementById('add-movie'));
    movieDetailsPage.initialize(document.getElementById('movie-details'));
    editMoviePage.initialize(document.getElementById('edit-movie'));
    viewFinder.initialize(document.querySelectorAll('.link'));

    viewFinder.navigateTo('home');
}
