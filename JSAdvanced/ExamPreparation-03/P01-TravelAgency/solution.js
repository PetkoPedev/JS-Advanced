window.addEventListener('load', solution);

function solution() {
  let submitButton = document.getElementById('submitBTN');
  
  let fullnameInput = document.querySelector('#fname');
  let emailInput = document.querySelector('#email');
  let phoneInput = document.querySelector('#phone');
  let addressInput = document.querySelector('#address');
  let codeInput = document.querySelector('#code');
  let mainDiv = document.querySelector('.preview');
  let mainUl = document.getElementById('infoPreview');

  let editBtn = document.querySelector('#editBTN');
  editBtn.addEventListener('click', editHandle);
  let continueBtn = document.querySelector('#continueBTN');
  continueBtn.addEventListener('click', continueHandle);


  submitButton.addEventListener('click', sendToPreview);
  function sendToPreview(e) {
    e.preventDefault();
    e.target.disabled = true;

    if (!fullnameInput.value || !emailInput.value) {
      return;
    }

    let fullName = fullnameInput.value;
    let email = emailInput.value;
    let phone = phoneInput.value;
    let address = addressInput.value;
    let code = codeInput.value;

    let fullnameLi = document.createElement('li');
    fullnameLi.textContent = `Full Name: ${fullName}`;

    let emailLi = document.createElement('li');
    emailLi.textContent = `Email: ${email}`;

    let phoneLi = document.createElement('li');
    phoneLi.textContent = `Phone Number: ${phone}`;

    let addressLi = document.createElement('li');
    addressLi.textContent = `Address: ${address}`;

    let codeLi = document.createElement('li');
    codeLi.textContent = `Postal Code: ${code}`;

    mainUl.appendChild(fullnameLi);
    mainUl.appendChild(emailLi);
    mainUl.appendChild(phoneLi);
    mainUl.appendChild(addressLi);
    mainUl.appendChild(codeLi);

    mainDiv.appendChild(mainUl);

    editBtn.disabled = false;

    continueBtn.disabled = false;

    fullnameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';
    addressInput.value = '';
    codeInput.value = '';
  }

  function editHandle(e) {
    e.target.disabled = true;
    continueBtn.disabled = true;
    submitButton.disabled = false;

    fullnameInput.value = mainUl.children[0].textContent.split(': ').slice(1);
    emailInput.value = mainUl.children[1].textContent.split(': ').slice(1);
    phoneInput.value = mainUl.children[2].textContent.split(': ').slice(1);
    addressInput.value = mainUl.children[3].textContent.split(': ').slice(1);
    codeInput.value = mainUl.children[4].textContent.split(': ').slice(1);
    Array.from(mainUl.children).forEach(li=> li.remove());
  }

  function continueHandle(){
    let divBlock = document.querySelector('#block');
    Array.from(divBlock.children).forEach(c => c.remove());
    let h3Element = document.createElement('h3');
    h3Element.textContent = "Thank you for your reservation!";
    divBlock.appendChild(h3Element);
  }
}
