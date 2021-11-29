let section = undefined;

function initialize(domElement){
    section = domElement;
}

export async function getView(){
    return section;
}

let editMoviePage = {
    initialize,
    getView
};

export default editMoviePage;