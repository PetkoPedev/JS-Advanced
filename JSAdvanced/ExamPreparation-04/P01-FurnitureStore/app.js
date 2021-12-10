window.addEventListener('load', solve);

function solve(){
    let modelInput = document.getElementById('model');
    let yearInput = document.getElementById('year');
    let descriptionInput = document.getElementById('description');
    let priceInput = document.getElementById('price');
    let addButton = document.getElementById('add');
    addButton.addEventListener('click', addFurniture);
    let furnitureListTable = document.getElementById('furniture-list');

    let totalPrice = document.querySelector('.total-price');

    let finalPrice = 0;

    function addFurniture(e){
        e.preventDefault();

        let model = modelInput.value;
        let year = yearInput.value;
        let description = descriptionInput.value;
        let price = Number(priceInput.value);

        if (model == '' || year < 0 || description == '' || price < 0) {
            return;
        }

        let infoTr = document.createElement('tr');
        infoTr.classList.add('info');

        let modelTd = document.createElement('td');
        modelTd.textContent = model;

        let priceTd = document.createElement('td');
        priceTd.textContent = `${price.toFixed(2)}`;

        let buttonsTd = document.createElement('td');
        let moreButton = document.createElement('button');
        moreButton.classList.add('moreBtn');
        moreButton.textContent = "More Info";
        let buyButton = document.createElement('button');
        buyButton.classList.add('buyBtn');
        buyButton.textContent = "Buy it";
        buttonsTd.appendChild(moreButton);
        buttonsTd.appendChild(buyButton);
        
        infoTr.appendChild(modelTd);
        infoTr.appendChild(priceTd);
        infoTr.appendChild(buttonsTd);

        let hideTr = document.createElement('tr');
        hideTr.classList.add('hide');
        let yearTd = document.createElement('td');
        yearTd.textContent = `Year: ${year}`;
        let descriptionTd = document.createElement('td');
        descriptionTd.colSpan = 3;
        descriptionTd.textContent = `Description: ${description}`;
        hideTr.appendChild(yearTd);
        hideTr.appendChild(descriptionTd);

        furnitureListTable.appendChild(infoTr);
        furnitureListTable.appendChild(hideTr);

        moreButton.addEventListener('click', () => {
            if(moreButton.textContent === "More Info"){
                moreButton.textContent = "Less Info";
                hideTr.style.display = 'contents';
            } else {
                moreButton.textContent = "More Info";
                hideTr.style.display = 'none';
            }
        });

        buyButton.addEventListener('click', () => {
            finalPrice += price;
            totalPrice.textContent = `${finalPrice.toFixed(2)}`;
            infoTr.remove();
            hideTr.remove();
        });

        modelInput.value = "";
        yearInput.value = "";
        descriptionInput.value = "";
        priceInput.value = "";
    }
}
