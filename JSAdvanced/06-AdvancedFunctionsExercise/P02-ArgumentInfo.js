function solve(...params) {
    let occurencies = {};
    let result = [];
    params.forEach(el => {
        let type = typeof (el);
        result.push(`${type}: ${el}`);
        occurencies[type] = occurencies[type] !== undefined ? occurencies[type]++ : 1;
    })

    let sortedKeys = Object.keys(occurencies)
        .sort((a, b) => occurencies[b] - occurencies[a]);
    sortedKeys.forEach(key => result.push(`${key} = ${occurencies[key]}`));

    return result.join('\n');
}

console.log(solve('cat', 42, function () { console.log('Hello world!'); }))