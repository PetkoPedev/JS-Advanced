function solve(input, step) {
    let result = [];

    for (let i = 0; i < input.length; i++) {
        if (i % step === 0) {
            result.push(input[i]);
        }
    }

    return result;
}

console.log(solve(['5',
    '20',
    '31',
    '4',
    '20'],
    2
));