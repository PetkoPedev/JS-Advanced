import { html } from '../../node_modules/lit-html/lit-html.js';

export default (movie) => html`
    <div class="card" style="width: 18rem;">
        <img src="${movie.imageSrc}" class="card-img-top" alt="${movie.title}">
        <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">${movie.description}</p>
            <a href="#" class="btn btn-primary">Show details</a>
        </div>
    </div>
`;