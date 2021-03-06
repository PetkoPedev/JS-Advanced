const baseUrl = 'http://localhost:3030';

export const login = async (email, password) => {
    let response = await fetch(`${baseUrl}/users/login`, {
        method: 'Post',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    let jsonResult = await response.json();
    if (response.ok) {
        return jsonResult;
    } else {
        throw jsonResult;
    }
};

export const register = async (email, password) => {
    return fetch(`${baseUrl}/users/register`, {
        method: 'Post',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(res => res.json());
};

export const logout = (token) => {
    return fetch(`${baseUrl}/users/logout`, {
        headers: {
            'X-Authorization': token,
        }
    })
}

export const getUser = () => {
    let username = localStorage.getItem('username');

    return username;
};

export const isAuthenticated = () => {
    return Boolean(getUser());
};