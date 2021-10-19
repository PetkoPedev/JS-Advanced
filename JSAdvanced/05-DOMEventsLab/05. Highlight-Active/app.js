function focused() {
    let inputFields = document.getElementsByTagName('input');
    
    for (const el of inputFields) {
        el.addEventListener('focus', onFocus);
        el.addEventListener('blur', onBlur);
    }

    function onFocus(ev) {
        ev.target.parentNode.className = 'focused';
    }

    function onBlur(ev) {
        ev.target.parentNode.className = '';
    }
}