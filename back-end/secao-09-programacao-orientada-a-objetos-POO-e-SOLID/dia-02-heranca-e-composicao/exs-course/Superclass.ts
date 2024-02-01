class Superclas {
    constructor (public isSuper: boolean = true) { }

    // protected sayHello(): void {
    public sayHello(): void {
        console.log('Olá mundo!');
    }
}

class Subclass extends Superclas {
    constructor () {
        super();
        this.isSuper = false;
    }

    // public sayHello2(): void {
    //     this.sayHello();
    // }
}

const myFunc = (superclas: Superclas) => {
    superclas.sayHello();
    console.log(superclas.isSuper ? 'Super!' : 'Sub!')
}

const teste1 = new Superclas();
const teste2 = new Subclass();

myFunc(teste1);
myFunc(teste2);

