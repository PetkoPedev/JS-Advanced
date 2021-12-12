import moviesService from "../services/moviesService.js";

let moviesSection = document.querySelector('.movies');

function showPage(){
    moviesSection.classList.remove('hidden');
    moviesService.getAllMovies()
    .then(renderMovies);
}

function hidePage() {
    moviesSection.classList.add('hidden');
}


function renderMovies(movies){
    let movieTemplate = moviesSection.querySelector('#movie-card-template');
    let movieListElement = document.createDocumentFragment();
    for (const movie of movies) {
        console.log(movie);
        
        let currentMovieElement = movieTemplate.cloneNode(true);
        currentMovieElement.classList.remove('hidden');
        currentMovieElement.removeAttribute('id');
        
        let titleElement = currentMovieElement.querySelector('.card-title');
        titleElement.textContent = movie.title;

        let descriptionElement = currentMovieElement.querySelector('.card-text');
        descriptionElement.textContent = movie.description;

        movieListElement.appendChild(currentMovieElement);
    }

    moviesSection.appendChild(movieListElement);
}

export default {
    showPage,
    hidePage
}