function create(words) {

   let output = document.getElementById('content');

   words.forEach(el => output.appendChild(createArticle(el)));

   function createArticle(text) {
      let pEl = e('p', text);
      pEl.style.display = 'none';

      let divEl = e('div', pEl);
      divEl.addEventListener('click', () => {
         pEl.style.display = '';
      });

      return divEl;
   }

   function e(type, content) {
      let result = document.createElement(type);

      if (typeof content == 'string') {
         result.textContent = content;
      }else{
         result.appendChild(content);
      }

      return result;
   }
}