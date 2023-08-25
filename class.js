class Passant{
    constructor(pName, pAge){
        this.passantName = pName;
        this.age = pAge;
        this.fee = 500 + "$";
    }
}

const passant1 = new passant("Abul", 32);
const passant2 = new passant("Kabul", 54);
const passant3 = new passant("Jamal", 14);

passant1.address = "Pabna";
passant2["fee"] = 800+"$";

let pn = passant3.passantName;

console.log(passant1);
console.log(passant2);
console.log(passant3);
console.log(pn);
