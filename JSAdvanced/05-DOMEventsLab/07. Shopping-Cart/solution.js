function solve() {
   let output = document.querySelector('textarea');

   const cart = [];

   let shoppingCart = document.querySelector('.shopping-cart').addEventListener('click', (ev) => {
      if (ev.target.tagName == 'BUTTON' && ev.target.className == 'add-product') {
         const product = ev.target.parentNode.parentNode;
         let title = product.querySelector('.product-title').textContent;
         let price = Number(product.querySelector('.product-line-price').textContent);

         cart.push({ title, price });
         output.value += `Added ${title} for ${price.toFixed(2)} to the cart.\n`;
      }
   });

   let checkOut = document.querySelector('.checkout').addEventListener('click', () => {
      const result = cart.reduce((acc, c) => {
         acc.items.push(c.title);
         acc.total += c.price;
         return acc;
      }, {items: [], total: 0 });

      output.value += `You bought ${result.items.join(', ')} for ${result.total.toFixed(2)}.`;
   });
}