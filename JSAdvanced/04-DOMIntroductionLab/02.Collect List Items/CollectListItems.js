function extractText() {
    let itemNodes = document.querySelectorAll('ul#items li');
    let textArea = document.querySelector('#result');

    for (let node of itemNodes) {
        textArea.value += node.textContent + '\n';
    }

    // const liElements = [...document.getElementsByTagName('li')];
    // const elementText = liElements.map(e => e.textContent);
    // document.getElementById('result').value = elementText.join('\n');
}