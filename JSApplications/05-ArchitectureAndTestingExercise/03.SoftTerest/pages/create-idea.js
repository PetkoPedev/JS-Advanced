import ideaService from "../services/ideaService.js";

let section = undefined;
let navLinkClass = undefined;

function initialize(domElement, linkClass){
    section = domElement;
    navLinkClass = linkClass;
}

async function getView(){
    let createIdea = await ideaService.createIdea();

    [...section.children].forEach(el => el.remove());

    let createIdeaHtml = createIdea.map(x => createHtmlIdea(x));
    section.appendChild(createIdeaHtml);
    return section;
}

function createHtmlIdea(idea){
    // TODO
}

let createIdeaPage = {
    initialize,
    getView
};

export default createIdeaPage;