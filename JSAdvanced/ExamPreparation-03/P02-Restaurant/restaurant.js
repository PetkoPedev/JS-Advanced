class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = Number(budgetMoney);
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {
        for (let entry of products) {
            let line = entry.split(" ");
            let productName = line[0];
            let productQuantity = line[1];
            productQuantity = Number(productQuantity);
            let productTotalPrice = line[2];
            productTotalPrice = Number(productTotalPrice);

            if (this.budgetMoney - productTotalPrice >= 0) {
                if (this.stockProducts[productName]) {
                    this.stockProducts[productName] += productQuantity;
                } else
                    this.stockProducts[productName] = productQuantity;

                this.budgetMoney -= productTotalPrice;
                this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
            } else {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        }

        return this.history.join("\n").trim();
    }

    addToMenu(meal, neededProducts, price) {
        if (!this.menu.hasOwnProperty(meal)) {
            this.menu[meal] = { products: neededProducts, price: +price };
            if (Object.keys(this.menu).length == 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
            } else if (Object.keys(this.menu).length > 1 || Object.keys(this.menu).length == 0) {
                return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
            }
        } else {
            return `The ${meal} is already in the our menu, try something different.`;
        }
    }

    showTheMenu() {
        if (Object.keys(this.menu).length === 0) {
            return "Our menu is not ready yet, please come later...";
        }

        let result = [];
        for (const currentMeal of Object.keys(this.menu)) {
            result.push(`${currentMeal} - $ ${this.menu[currentMeal].price}`);
        }
        return result.join("\n").trim();
    }

    makeTheOrder(meal) {
        if (!this.menu.hasOwnProperty(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        } else {
            let neededIngredients = this.menu[meal].products;
            for (let item of neededIngredients) {
                let ingredient = item[0];
                let ingredientQuantity = Number(item[1]);

                if (this.stockProducts[ingredient] < ingredientQuantity || !this.stockProducts[ingredient]) {
                    return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
                }
            }

            for (let item of neededIngredients) {
                let ingredient = item[0];
                let ingredientQuantity = Number(item[1]);

                this.stockProducts[ingredient] -= ingredientQuantity;
            }

            this.budgetMoney += this.menu[meal].price;
            return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
        }
    }
}


let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));

