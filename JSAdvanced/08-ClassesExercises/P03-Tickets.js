function solve(ticketsArr, sortingCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }

        compareTo(other, criteria) {
            if (typeof this[criteria] === 'string') {
                return this[criteria].localeCompare(other[criteria]);
            } else {
                return this[criteria] - other[criteria];
            }
        }
    }
    
    let tickets = [];
    for (let i = 0; i < ticketsArr.length; i++) {
        let [destination, price, status] = ticketsArr[i].split('|');
        price = Number(price);
        let ticket = new Ticket(destination, price, status);
        tickets.push(ticket);
    }

    tickets.sort((a, b) => a.compareTo(b, sortingCriteria));
    return tickets;
}