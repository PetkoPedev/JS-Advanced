function solve(names) {
    let result = names.sort((a, b) => a.localeCompare(b)).map((name, index) => {
        return `${index + 1}.${name}`;
    });

    return result.join('\n');
}

console.log(solve(["John", "Bob", "Christina", "Ema"]));