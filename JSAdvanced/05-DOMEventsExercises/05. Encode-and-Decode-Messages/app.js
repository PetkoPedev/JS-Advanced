function encodeAndDecodeMessages() {
    let encodeButton = document.querySelectorAll('button')[0];
    let decodeButton = document.querySelectorAll('button')[1];
    let inputText = document.querySelectorAll('textarea')[0];
    let outputText = document.querySelectorAll('textarea')[1];

    encodeButton.addEventListener('click', encodeMessage);
    decodeButton.addEventListener('click', decodeMessage);

    function encodeMessage() {
        let text = inputText.value;
        let encodedMessage = '';
        for (let i = 0; i < text.length; i++) {
            encodedMessage += String.fromCharCode(ascii(`${text[i]}`) + 1);
        }
        inputText.value = '';
        outputText.value = encodedMessage;
    }

    function decodeMessage() {
        let text = outputText.value;
        let decodedMessage = '';
        for (let i = 0; i < text.length; i++) {
            decodedMessage += String.fromCharCode(ascii(`${text[i]}`) - 1);
        }
        outputText.value = decodedMessage;
    }

    function ascii(a) {
        return a.charCodeAt(0);
    }
}