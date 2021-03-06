function solve(input) {
    return input.sort((a, b) => {
        if (a.length === b.length) {
            return a.localeCompare(b);
        }

        return a.length - b.length;
    }).join('\n');
}

console.log(solve(['alpha',
    'beta',
    'gamma']
));