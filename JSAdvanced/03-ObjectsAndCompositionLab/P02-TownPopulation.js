function solve(townsArray) {
    const towns = {};

    for (let townAsString of townsArray) {
        let tokens = townAsString.split(' <-> ');
        let name = tokens[0];
        let population = Number(tokens[1]);

        if (towns[name] == undefined) {
            towns[name] = population;
        } else {
            towns[name] += population;
        }
    }

    for (let name in towns) {
        console.log(`${name} : ${towns[name]}`);
    }
}

solve(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
);