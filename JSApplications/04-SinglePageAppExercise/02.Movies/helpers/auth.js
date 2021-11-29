import homeMoviePage from '../pages/home.js';
import viewFinder from '../viewFinder.js'
import { jsonRequest } from "./httpService.js";

export function setAuthToken() {
    localStorage.setItem('authToken', token);
}

export function getAuthToken() {
    localStorage.getItem('authToken', token);
}

export function isLoggedIn() {
    return localStorage.getItem('authToken') !== null;
}

export async function logout(){
    let result = await jsonRequest('http://localhost:3030/users/logout', 'Get', undefined, true, true);
    localStorage.clear();
    return homeMoviePage.getView();
}

let auth = {
    setAuthToken,
    getAuthToken,
    isLoggedIn,
    logout,
}

export default auth;