let submitButton = document.getElementById('submit');
submitButton.addEventListener('click', OnSubmit);

let studentsResultsTableBody = document.querySelector('#results tbody');

let studentsForm = document.getElementById('form');

async function OnSubmit(e){
    e.preventDefault();
    let url = 'http://localhost:3030/jsonstore/collections/students';
    let studentResponse = await fetch(url);
    let students = await studentResponse.json();
    
    Object.keys(students).forEach(key => {
        let htmlStudent = createHtmlStudent(students[key], key);
        studentsResultsTableBody.appendChild(htmlStudent);
    })

    let form = e.currentTarget;
    let formData = new FormData(form);
    if (form.dataset.isEdit === undefined) {
        createStudent(formData);
    }
}

async function createStudent(formData){
    let newStudent = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        facultyNumber: formData.get('facultyNumber'),
        grade: formData.get('grade')
    }

    let url = 'http://localhost:3030/jsonstore/collections/students';

    let response = await fetch(url, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'Post',
        body: JSON.stringify(newStudent)
    });

    let result = await response.json();
    let student = createHtmlStudent(result, result._id);
    studentsResultsTableBody.appendChild(student);
}

function createHtmlStudent(student, id){
    let firstNameTd = ce('td', {class: 'firstName'}, student.firstName);
    let lastNameTd = ce('td', {class: 'lastName'}, student.lastName);
    let facultyNumberTd = ce('td', {class: 'facultyNumber'}, student.facultyNumber);
    let gradeTd = ce('td', {class: 'grade'}, student.grade);
    let tr = ce('tr', {class: 'student'}, firstNameTd, lastNameTd, facultyNumberTd, gradeTd);
    tr.dataset.id = id;
    return tr;
}

function createHtmlStudent(student, id){
    
}



function ce(tag, attributes, ...params) {
    let element = document.createElement(tag);
    let firstValue = params[0];
    if (params.length == 1 && typeof (firstValue) !== 'object') {
        if (['input', 'textarea'].includes(tag)) {
            element.value = firstValue;
        } else {
            element.textContent = firstValue;
        }
    } else {
        element.append(...params);
    }

    if (attributes !== undefined) {
        Object.keys(attributes).forEach(key => {
            element.setAttribute(key, attributes[key]);
        })
    }

    return element;
}