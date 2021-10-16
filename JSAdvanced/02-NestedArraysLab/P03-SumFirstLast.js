function solve(inputArr) {
    let first = Number(inputArr.shift());
    let last = Number(inputArr.pop());

    return first + last;
}

console.log(solve(['20', '30', '40']))