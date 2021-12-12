import { jsonRequest } from "../helpers/httpService.js";

let baseUrl = 'http://localhost:3030';

async function createIdea(newIdea){
    let createResult = await jsonRequest(`${baseUrl}/data/ideas`, 'Post', newIdea, true);
    return createResult;
}

async function editIdea(editedIdea, id){
    let updateResult = await jsonRequest(`${baseUrl}/data`, 'Put', editedIdea, true);
    return updateResult;
}

async function getIdea(ideaId){
    let idea = await jsonRequest(`${baseUrl}/data/ideas/${ideaId}`);
    return idea;
}

async function getAllIdeas(){
    let url = `${baseUrl}/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc`;
    let ideas = await jsonRequest(url);
    return ideas;
}

async function deleteIdea(ideaId){
    let deleteResult = await jsonRequest(`${baseUrl}/data/ideas/${ideaId}`, 'Delete', undefined, true);
    return deleteResult;
}

let ideaService = {
    createIdea,
    editIdea,
    getIdea,
    getAllIdeas,
    deleteIdea
}

export default ideaService;