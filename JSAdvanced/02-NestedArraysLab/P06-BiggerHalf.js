function solve(numbers) {
    return numbers.sort((a, b) => a - b).slice(numbers.length / 2);
}

console.log(solve([4, 7, 2, 5]));
