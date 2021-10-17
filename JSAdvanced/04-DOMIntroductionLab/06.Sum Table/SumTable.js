function sumTable() {
    let rows = document.querySelectorAll('table tr');
    let total = 0;
    for (let i = 1; i < rows.length - 1; i++) {
        let cols = rows[i].children;
        let cost = cols[cols.length - 1].textContent;
        total += Number(cost);
    }
    document.getElementById('sum').textContent = total;
}