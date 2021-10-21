function create(words) {
   let content = document.getElementById('content');
   
   for (let i = 0; i < words.length; i++) {
      let div = document.createElement('div');
      let paragraph = document.createElement('p');
      paragraph.textContent = words[i];
      paragraph.style.display = 'none';
      div.appendChild(paragraph);
      content.appendChild(div);
   }

   content.addEventListener('click', showParagraph);

   function showParagraph(e) {
      let innerP = e.target.children[0];
      innerP.style.display = 'block';
   }
}