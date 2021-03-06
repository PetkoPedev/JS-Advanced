class Hex {
    constructor(value) {
        this.value = Number(value);
    }

    valueOf() {
        return this.value;
    }

    toString() {
        return `0x${this.value.toString(16).toUpperCase()}`;
    }
    
    // plus({number}) This function should add a number or Hex object and return a new Hex object.
    // minus({number}) This function should subtract a number or Hex object and return a new Hex object.
    // parse({string}) Create a parse class method that can parse Hexidecimal numbers and convert them to standard decimal numbers.

}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
// console.log(a.plus(b).toString());
// console.log(a.plus(b).toString()==='0xF');
// console.log(Hex.parse('AAA'));
