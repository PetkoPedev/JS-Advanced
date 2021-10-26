function solve() {
    //let addTaskSection = document.getElementsByTagName('section')[0];
    let openProgressSection = document.getElementsByTagName('section')[1];
    let inProgressSection = document.getElementsByTagName('section')[2];
    let completeSection = document.getElementsByTagName('section')[3];

    let task = document.getElementById('task');
    let description = document.getElementById('description');
    let date = document.getElementById('date');
    let addBtn = document.getElementById('add');

    function createElement(type, text, className) {
        let result = document.createElement(type);
        result.textContent = text;
        if (className) {
            result.className = className;
        }
        return result;
    }

    addBtn.addEventListener('click', addTaskToOpen);

    function addTaskToOpen(e) {
        e.preventDefault();
        
        if (task.value == '' || description.value == '' || date.value == '') {
            return;
        }

        let article = createElement('article');
        let h3Element = createElement('h3', task.value);
        let descriptionElement = createElement('p', 'Description: ' + description.value);
        let duedateElement = createElement('p', 'Due Date: ' + date.value);
        let flexElement = createElement('div', undefined, 'flex');
        let greenBtn = createElement('button', 'Start', 'green');
        let redBtn = createElement('button', 'Delete', 'red');

        flexElement.appendChild(greenBtn);
        flexElement.appendChild(redBtn);

        article.appendChild(h3Element);
        article.appendChild(descriptionElement);
        article.appendChild(duedateElement);
        article.appendChild(flexElement);

        openProgressSection.children[1].appendChild(article);

        task.value = '';
        description.value = '';
        date.value = '';

        redBtn.addEventListener('click', e => {
            e.preventDefault();
            article.remove();
        });

        greenBtn.addEventListener('click', addTaskToInProgress);

        function addTaskToInProgress(e) {
            e.preventDefault();
    
            inProgressSection.children[1].appendChild(article);
            let finishBtn = createElement('button', 'Finish', 'orange');
            greenBtn.remove();
            flexElement.appendChild(finishBtn);
            finishBtn.addEventListener('click', e => {
                completeSection.children[1].appendChild(article);
                flexElement.remove();
            })
        }
    }
}