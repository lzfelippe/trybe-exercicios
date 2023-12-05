class Animal {
    constructor (public name: string, private birthDate: Date) { }
    
    get age() {
        const timeDiff = Math.abs(
            Date.now() -
            new Date(this.birthDate).getTime()
        );

        return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    }
}

class Mammal extends Animal {
    walk() {
        console.log(`${this.name} is walking`);
    }
}

class Bird extends Animal {
    fly() {
        console.log(`${this.name} is flying`);
    }
}

const parrot = new Bird('Parrot', new Date(Date.parse('May 5, 1995')));

const dog = new Mammal('Dog', new Date(Date.parse('May 5, 2000')));


const main = (animal: Animal) => {
    console.log(animal.age);
}

// main(dog);
dog.walk(); 
dog.age;

console.log(parrot.age);
parrot.fly();