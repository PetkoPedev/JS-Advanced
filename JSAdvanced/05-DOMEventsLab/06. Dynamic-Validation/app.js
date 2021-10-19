function validate() {
    let inputElement = document.querySelector('input');
    let input = inputElement.value;
    let reg = /^([\w\-.]+)@([a-z]+)(\.[a-z]+)+$/;

    inputElement.addEventListener('change', checkEmailHandler);

    function checkEmailHandler(e) {
        if (reg.test(e.target.value)) {
            e.target.removeAttribute('class');
            return;
        }

        e.target.className = 'error';
    }
}