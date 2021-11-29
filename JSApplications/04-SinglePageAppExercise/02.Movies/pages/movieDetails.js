let section = undefined;

function initialize(domElement){
    section = domElement;
}

export async function getView(){
    return section;
}

let movieDetailsPage = {
    initialize,
    getView
};

export default movieDetailsPage;