import { GET, POST } from "../services/requester.js";
import * as endPoints from '../services/endPoints.js'

function getAllMovies() {
    return GET(endPoints.movies);
}

function createMovie(title, description, imgUrl) {
    return POST(endPoints.movies, { title, description, imgUrl })
}

export default {
    getAllMovies,
    createMovie
}