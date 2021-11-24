let loginForm = document.getElementById('login');
loginForm.addEventListener('submit', login);

async function login(e){
    e.preventDefault();
    let form = e.target;
    let formData = new FormData(form);

    let password = formData.get('password');

    let newLoginUser = {
        email: formData.get('email'),
        password: password
    }

    let loginResponse = await fetch('http://localhost:3030/users/login',
    {
        headers: {
            'Content-Type': 'application-json'
        },
        method: 'Post',
        body: JSON.stringify(newLoginUser)
    });

    let loginResult = await loginResponse.json();
    
    localStorage.setItem('token', loginResult.accessToken);
    localStorage.setItem('userId', loginResult._id);
    location.assign('./index.html');
}