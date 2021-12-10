class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {
        let result = [];
        let currentPrice = 0;
        let isFound = false;
        for (const entry of vegetables) {
            let line = entry.split(" ");
            let type = line[0];
            let quantity = line[1];
            let price = line[2];
            quantity = Number(quantity);
            price = Number(price);
            
            if (this.availableProducts.includes(type)) {
                isFound = true;
                this.availableProducts.quantity += quantity;
                if (currentPrice > price) {
                    this.availableProducts.price = currentPrice;
                }
                this.availableProducts.push();
            }
            else if (!isFound) {
                let vegetable = {
                    type, quantity, currentPrice
                }
                this.availableProducts.push(vegetable);
            }
            result.push(type)
        }

        return `Successfully added ${result.join(', ')}`;
    }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
