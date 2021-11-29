let section = undefined;

function initialize(domElement){
    section = domElement;
}

export async function getView(){
    return section;
}

let addMoviePage = {
    initialize,
    getView
};

export default addMoviePage;