import { render, html } from './node_modules/lit-html/lit-html.js';
import movieListTemplate from './src/templates/movieListTemplate.js';
import movieService from './src/services/movieService.js';

let rootElement = document.querySelector('#root');

movieService.getAll()
.then(movies => {
    let movieListTemplateResult = movieListTemplate(movies);

    render(movieListTemplateResult, rootElement);
})
