class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { child: 150, student: 300, collegian: 500 };
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        if (this.priceForTheCamp[condition] == undefined) {
            throw new Error('Unsuccessful registration at the camp.');
        }

        for (const item of this.listOfParticipants) {
            if (item.name === name) {
                return `The ${name} is already registered at the camp.`;
            }
        }

        let moneyNeeded = this.priceForTheCamp[condition];
        if (money < moneyNeeded) {
            return 'The money is not enough to pay the stay at the camp.';
        }

        this.listOfParticipants.push({ name, condition, power: 100, wins: 0 });
        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant(name){
        let listed = this.listOfParticipants.find((x) => x.name == name);
        if (listed == undefined) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }

        this.listOfParticipants = this.listOfParticipants.filter((x) => x.name !== name);
        return `The ${name} removed successfully.`;
    }

    timeToPlay(typeOfGame, participant1, participant2){
        if (typeOfGame == "WaterBalloonFights") {
            let player1 = this.listOfParticipants.find((x) => x.name == participant1);
            let player2 = this.listOfParticipants.find((x) => x.name == participant2);

            if (player1 == undefined || player2 == undefined) {
                throw new Error('Invalid entered name/s.');
            }

            if (player1.condition != player2.condition) {
                throw new Error('Choose players with equal condition.');
            }

            let name;
            if (player1.power > player2.power) {
                name = player1.name;
                player1.wins++;
                return `The ${name} is winner in the game ${typeOfGame}.`;
            } else if(player1.power < player2.power){
                name = player2.name;
                player2.wins++;
                return `The ${name} is winner in the game ${typeOfGame}.`;
            } else {
                return 'There is no winner.';
            }
        } else if(typeOfGame == "Battleship"){
            let player = this.listOfParticipants.find((x) => x.name == participant1);
            if (player == undefined) {
                throw new Error('Invalid entered name/s.');
            }

            player.power += 20;
            return `The ${player.name} successfully completed the game ${typeOfGame}.`;
        }
    }

    toString(){
        let result = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`;
        let sorted = this.listOfParticipants.sort((a, b) => b.wins - a.wins);
        for (const item of sorted) {
            result += `\n${item.name} - ${item.condition} - ${item.power} - ${item.wins}`;
        }

        return result;
    }
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));
