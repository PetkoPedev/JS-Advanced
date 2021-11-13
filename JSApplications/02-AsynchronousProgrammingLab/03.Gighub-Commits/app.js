function loadCommits() {
    let username = document.getElementById('username').value;
    let repository = document.getElementById('repo').value;
    let url = `https://api.github.com/repos/${username}/${repository}/commits`
}

//TODO Finish
