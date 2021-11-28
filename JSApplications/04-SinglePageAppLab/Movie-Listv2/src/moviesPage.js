let moviesSection = document.querySelector('.movies');

function showPage(){
    moviesSection.classList.remove('hidden');
}

function hidePage() {
    moviesSection.classList.add('hidden');
}

export default {
    showPage,
    hidePage
}