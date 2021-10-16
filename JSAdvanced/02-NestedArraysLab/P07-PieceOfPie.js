function solve(pies, startFlavor, endFlavor) {
    let start = pies.indexOf(startFlavor);
    let end = pies.indexOf(endFlavor) + 1;

    let result = pies.slice(start, end);
    return result;
}

console.log(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
);