import { jsonRequest } from "../helpers/httpService.js";

let section = undefined;

function initialize(domElement){
    section = domElement;
}

export async function getView(){
    let url = 'http://localhost:3030/data/movies';
    let movies = await jsonRequest(url);

    let moviesHtml = movies.map(m => createHtmlMovie(m)).join('\n');
    let movieContainer = section.querySelector('#movie-container');
    movieContainer.querySelectorAll('.movie').forEach(el => el.remove());

    movieContainer.innerHTML = moviesHtml;
    return section;
}

let homeMoviePage = {
    initialize,
    getView
};

function createHtmlMovie(movie){
    let elem = `<div class="card mb-4 movie">
    <img class="card-img-top" src="${movie.img}"
        alt="Card image cap" width="400">
    <div class="card-body">
        <h4 class="card-title">${movie.title}</h4>
    </div>
    <div class="card-footer">
        <a class="link" data-route="movie-details" href="#/details/6lOxMFSMkML09wux6sAF">
            <button type="button" class="btn btn-info">Details</button>
        </a>
    </div>
</div>`
}

export default homeMoviePage;