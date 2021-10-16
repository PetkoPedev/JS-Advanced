function solve(month, year) {
    let date = new Date(month, year, 0).getDate();
    return date;
}

console.log(solve(1, 2012));