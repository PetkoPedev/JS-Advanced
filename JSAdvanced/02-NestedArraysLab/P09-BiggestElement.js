function solve(input) {
    let number = Number.MIN_SAFE_INTEGER;
    for (let row = 0; row < input.length; row++) {
        for (let col = 0; col < input[row].length; col++) {
            let currentNum = input[row][col];
            if (currentNum > number) {
                number = currentNum;
            }
        }
    }
    return number;
}