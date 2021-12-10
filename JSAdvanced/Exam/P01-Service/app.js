window.addEventListener('load', solve);

function solve() {
    let productTypeInput = document.querySelector('select[name=type-product]');
    let descriptionInput = document.getElementById('description');
    let clientNameInput = document.getElementById('client-name');
    let clientPhoneInput = document.getElementById('client-phone');
    
    let submitOrdersSection = document.getElementById('received-orders');
    let completedOrdersSection = document.getElementById('completed-orders');

    let submitButton = document.querySelector('button');

    submitButton.addEventListener('click', receiveOrders);

    function receiveOrders(e){
        e.preventDefault();

        let productType = productTypeInput.value;
        let description = descriptionInput.value;
        let clientName = clientNameInput.value;
        let clientPhone = clientPhoneInput.value;

        productTypeInput.value = '';
        descriptionInput.value = '';
        clientNameInput.value = '';
        clientPhoneInput.value = '';

        if (!description || !clientName || !clientPhone) {
            return;
        }

        let divElement = document.createElement('div');
        divElement.classList.add('container');
        let h2Element = document.createElement('h2');
        h2Element.textContent = `Product type for repair: ${productType}`;
        let h3Element = document.createElement('h3');
        h3Element.textContent = `Client information: ${clientName}, ${clientPhone}`;
        let h4Element = document.createElement('h4');
        h4Element.textContent = `Description of the problem: ${description}`;
        let startRepairButton = document.createElement('button');
        startRepairButton.classList.add('start-btn');
        startRepairButton.textContent = 'Start repair';
        let finishRepariButton = document.createElement('button');
        finishRepariButton.classList.add('finish-btn');
        finishRepariButton.textContent = 'Finish repair';
        finishRepariButton.disabled = true;
        

        divElement.appendChild(h2Element);
        divElement.appendChild(h3Element);
        divElement.appendChild(h4Element);
        divElement.appendChild(startRepairButton);
        divElement.appendChild(finishRepariButton);

        submitOrdersSection.appendChild(divElement);

        startRepairButton.addEventListener('click', (e) => {
            let currentButton = e.currentTarget;
            currentButton.disabled = true;
            finishRepariButton.disabled = false;
        });

        finishRepariButton.addEventListener('click', (e) => {
            let finishedButton = e.currentTarget;
            divElement.remove();

            let finishedDiv = document.createElement('div');
            finishedDiv.classList.add('container');
            let finishedType = document.createElement('h2');
            finishedType.textContent = `Product type for repair: ${productType}`;
            let finishedClientInfo = document.createElement('h3');
            finishedClientInfo.textContent = `Client information: ${clientName}, ${clientPhone}`;
            let finishedDescription = document.createElement('h4');
            finishedDescription.textContent = `Description of the problem: ${description}`;

            finishedDiv.appendChild(finishedType);
            finishedDiv.appendChild(finishedClientInfo);
            finishedDiv.appendChild(finishedDescription);

            completedOrdersSection.appendChild(finishedDiv);

            let clearButton = document.querySelector('.clear-btn');

            clearButton.addEventListener('click', () => {
                finishedDiv.remove();
            });
        });
    }
    
}