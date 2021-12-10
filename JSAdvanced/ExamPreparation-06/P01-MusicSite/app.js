window.addEventListener('load', solve);

function solve() {
    let genreInput = document.getElementById('genre');
    let nameInput = document.getElementById('name');
    let authorInput = document.getElementById('author');
    let dateInput = document.getElementById('date');
    let addButton = document.getElementById('add-btn');

    let allHitsContainer = document.querySelector('.all-hits-container');
    let savedContainer = document.querySelector('.saved-container');
    let totalLikesSection = document.querySelector('#total-likes p');

    addButton.addEventListener('click', addSong);

    function addSong(e) {
        e.preventDefault();

        let genre = genreInput.value;
        let name = nameInput.value;
        let author = authorInput.value;
        let date = dateInput.value;

        genreInput.value = '';
        nameInput.value = '';
        authorInput.value = '';
        dateInput.value = '';

        if (!genre || !name || !author || !date) {
            return;
        }

        let hitsInfoDivElement = document.createElement('div');
        hitsInfoDivElement.classList.add('hits-info');

        let imgElement = document.createElement('img');
        imgElement.src = './static/img/img.png';

        let genreElement = document.createElement('h2');
        genreElement.textContent = `Genre: ${genre}`;

        let nameElement = document.createElement('h2');
        nameElement.textContent = `Name: ${name}`;

        let authorElement = document.createElement('h2');
        authorElement.textContent = `Author: ${author}`;

        let dateElement = document.createElement('h3');
        dateElement.textContent = `Date: ${date}`;

        let saveSongButton = document.createElement('button');
        saveSongButton.classList.add('save-btn');
        saveSongButton.textContent = "Save song";
        saveSongButton.addEventListener('click', () => {
            let savedHits = document.createElement('div');
            savedHits.classList.add('hits-info');

            let savedImg = document.createElement('img');
            savedImg.src = './static/img/img.png';

            let savedGenreElement = document.createElement('h2');
            savedGenreElement.textContent = `Genre: ${genre}`;

            let savedNameElement = document.createElement('h2');
            savedNameElement.textContent = `Name: ${name}`;

            let savedAuthorElement = document.createElement('h2');
            savedAuthorElement.textContent = `Author: ${author}`;

            let savedDateElement = document.createElement('h3');
            savedDateElement.textContent = `Date: ${date}`;

            let savedDeleteSongButton = document.createElement('button');
            savedDeleteSongButton.classList.add('delete-btn');
            savedDeleteSongButton.textContent = "Delete";
            savedDeleteSongButton.addEventListener('click', (e) => {
                e.preventDefault();
                e.currentTarget.parentElement.remove();
            })

            savedHits.appendChild(savedImg);
            savedHits.appendChild(savedGenreElement);
            savedHits.appendChild(savedNameElement);
            savedHits.appendChild(savedAuthorElement);
            savedHits.appendChild(savedDateElement);
            savedHits.appendChild(savedDeleteSongButton);

            savedContainer.appendChild(savedHits);

            hitsInfoDivElement.remove();
        });

        let likeSongButton = document.createElement('button');
        likeSongButton.classList.add('like-btn');
        likeSongButton.textContent = "Like song";
        likeSongButton.addEventListener('click', (e) => {
            e.preventDefault();
            let currentLikeButton = e.currentTarget;
            let total = totalLikesSection.textContent.split(" ");
            let totalLikes = Number(total[2]);
            totalLikes++;
            currentLikeButton.disabled = true;
            totalLikesSection.textContent = `Total Likes: ${totalLikes}`;
        })

        let deleteSongButton = document.createElement('button');
        deleteSongButton.classList.add('delete-btn');
        deleteSongButton.textContent = "Delete";
        deleteSongButton.addEventListener('click', (e) => {
            e.preventDefault();
            e.currentTarget.parentElement.remove();
        });

        hitsInfoDivElement.appendChild(imgElement);
        hitsInfoDivElement.appendChild(genreElement);
        hitsInfoDivElement.appendChild(nameElement);
        hitsInfoDivElement.appendChild(authorElement);
        hitsInfoDivElement.appendChild(dateElement);
        hitsInfoDivElement.appendChild(saveSongButton);
        hitsInfoDivElement.appendChild(likeSongButton);
        hitsInfoDivElement.appendChild(deleteSongButton);

        allHitsContainer.appendChild(hitsInfoDivElement);
    }
}