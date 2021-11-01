function solve(juicesArray) {
    let juicesAmount = new Map();
    let juicesBottles = new Map();

    for (let index = 0; index < juicesArray.length; index++) {
        let [juicesName, amount] = juicesArray[index].split(' => ');
        amount = Number(amount);

        if (!juicesAmount.has(juicesName)) {
            juicesAmount.set(juicesName, 0);
        }

        let totalAmount = juicesAmount.get(juicesName) + amount;

        if (totalAmount >= 1000) {
            if (!juicesBottles.has(juicesName)) {
                juicesBottles.set(juicesName, 0);
            }

            let newBottles = Math.trunc(totalAmount / 1000);
            let totalBottles = juicesBottles.get(juicesName) + newBottles;
            juicesBottles.set(juicesName, totalBottles);
        }
        
        juicesAmount.set(juicesName, totalAmount % 1000);
    }

    return [...juicesBottles].map(([key, value]) => `${key} => ${value}`).join('\n');
}


console.log(solve(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']
))