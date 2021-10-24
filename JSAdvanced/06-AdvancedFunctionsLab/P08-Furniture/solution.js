function solve() {
  const [input, output] = [...document.querySelectorAll('textarea')];
  let input = document.querySelector('textarea');
  let furnitureArray = JSON.parse(input.value.trim());
  let table = document.querySelector('table.table tbody');

  const [generateBtn, buyBtn] = [...document.querySelectorAll('button')];
  generateBtn.addEventListener('click', () => {
    table.innerHTML = '';
    furnitureArray.forEach(f => table.appendChild(createRow(f)));
  });

  function createRow(data) {
    let img = e('img');
    img.src = data.img;

    const check = e('input');
    check.type = 'checkbox';
    return e('tr',
    e('td', img),
    e('td', data.name),
    e('td', data.price),
    e('td', data.decFactor),
    e('td', check)
    );
  }
  
  function e(type, ...content) {
    let result = document.createElement(type);

    content.forEach(e => {
      if (typeof e == 'string') {
        const node = document.createTextNode(e);
        result.appendChild(node);
     }else{
        result.appendChild(e);
     }
    });

    return result;
 }
}