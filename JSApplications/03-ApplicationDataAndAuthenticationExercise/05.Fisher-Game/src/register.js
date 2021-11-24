let registerForm = document.getElementById('register');
registerForm.addEventListener('submit', register);

async function register(e){
    e.preventDefault();
    let form = e.target;
    let formData = new FormData(form);

    let password = formData.get('password');
    let repeatPassword = formData.get('rePass');

    if (password !== repeatPassword) {
        console.error('Passwords do not match.');
        return;
    }

    let newUser = {
        email: formData.get('email'),
        password: password
    }

    let registerResponse = await fetch('http://localhost:3030/users/register',
    {
        headers: {
            'Content-Type': 'application-json'
        },
        method: 'Post',
        body: JSON.stringify(newUser)
    });

    let registerResult = await registerResponse.json();

    localStorage.setItem('token', registerResult.accessToken);
    localStorage.setItem('userId', registerResult._id);
    location.assign('./index.html');
}