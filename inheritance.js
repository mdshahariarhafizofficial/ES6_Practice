
class Parent{
    constructor(){
        this.fatherName = "Abraham Linton";
    }
}

class Baby extends Parent{
    constructor (babyName, babyAge){
        super();
        this.name = babyName;
        this.age = babyAge;
    }
}

let baby1 = new Baby("Ronald", 12)
let baby2 = new Baby("Scuznegar", 12)
console.log(baby1);
console.log(baby2);