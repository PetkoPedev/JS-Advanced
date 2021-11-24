function attachEvents() {
    let ulPhonebookElement = document.getElementById('phonebook');

    let loadbutton = document.getElementById('btnLoad');
    loadbutton.addEventListener('click', loadPhonebookEntries);

    let createButton = document.getElementById('btnCreate');
    createButton.addEventListener('click', createContact);

    async function createContact(e){
        e.preventDefault();
        let personInput = document.getElementById('person');
        let phoneInput = document.getElementById('phone');
        let person = personInput.value;
        let phone = phoneInput.value;
        
        try {
            let url = 'http://localhost:3030/jsonstore/phonebook';
            let contactResponse = await fetch(url, {
                method: 'Post',
                body: JSON.stringify({person: person, phone: phone})
            });

            personInput.value = '';
            phoneInput.value = '';
            
        } catch(err){
            console.error(err);
        }
    }

    async function loadPhonebookEntries() {
        try {
            let url = 'http://localhost:3030/jsonstore/phonebook';
            let getPhonebookResult = await fetch(url);
            let phonebookContacts = await getPhonebookResult.json();

            Object.values(phonebookContacts).forEach(el => createItem(el));
        } catch (err) {
            console.error(err);
        }
    }

    function createItem(obj) {
        let liItem = document.createElement('li');
        liItem.textContent = `${obj.person}: ${obj.phone}`;
        liItem.setAttribute('id', obj._id);
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', onDelete);
        liItem.appendChild(deleteButton);
        ulPhonebookElement.appendChild(liItem);
    }

    async function onDelete(e){
        let id = e.target.parentElement.getAttribute('id');
        let deleteUrl = `http://localhost:3030/jsonstore/phonebook/${id}`;
        let request = await fetch(deleteUrl, {
            method: 'Delete'
        });

        e.target.parentElement.remove();
    }
}

attachEvents();
