function solve(arr, type) {
    let map = {
        'asc': (a, b) => a -b,
        'desc': (a, b) => b - a
    }

    return arr.sort(map[type]);
}

console.log(solve([14, 7, 17, 6, 8], 'asc'));