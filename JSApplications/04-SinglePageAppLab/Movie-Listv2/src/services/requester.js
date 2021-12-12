const request = (method, url, data) => {
    const options = {
        method,
    };
    
    if (method == 'POST') {
        options.headers = {
            'Content-Type': 'application/json'
        }

        options.body = JSON.stringify(data);
    }
    
    return fetch(url, options).then(res => res.json());
}

export default request;

export const GET = request.bind(null, 'GET');
export const POST = request.bind(null, 'POST');
export const PUT = request.bind(null, 'PUT');
export const DELETE = request.bind(null, 'DELETE');