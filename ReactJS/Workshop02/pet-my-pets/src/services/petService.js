import * as request from './requester.js';

const baseUrl = 'http://localhost:3030/data'

export const getAll = () => request.get(`${baseUrl}/pets`);

export const create = async (petData, token) => {
    let response = await fetch(`${baseUrl}/pets`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify({ ...petData, likes: [] })
    });

    let result = await response.json();
    return result;
};

export const remove = (petId, token) => {
    return fetch(`${baseUrl}/pets/${petId}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token
        }
    }).then(res => res.json());
};

export const update = (petId, petData) => request.put(`${baseUrl}/pets/${petId}`, petData);

export const getMyPets = (ownerId) => {
    let query = encodeURIComponent(`_ownerId="${ownerId}"`)
    return request.get(`${baseUrl}/pets?where=${query}`);
}

export const getOne = (petId, signal) => {
    return fetch(`${baseUrl}/pets/${petId}`, { signal })
        .then(res => res.json());
};

export const like = (petId, likes, token) => {
    return fetch(`${baseUrl}/pets/${petId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({
            likes
        })
    }).then(res => res.json());
};