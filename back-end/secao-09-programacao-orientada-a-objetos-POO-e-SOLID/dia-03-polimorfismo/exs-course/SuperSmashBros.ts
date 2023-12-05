abstract class Character {
    abstract talk(): void;
    abstract specialMove(): void;
}

class MeleeCharacter extends Character {
    constructor(private _name: string, private _specialMoveName: string) { super() }
    talk(): void { console.log(`Hi, I'm ${this._name}. I attack at close range.`); }
    specialMove(): void { console.log(`${this._name} used ${this._specialMoveName}!`); }
}

class LongRangeCharacter extends Character {
    constructor(private _name: string, private _specialMoveName: string) { super() }
    talk(): void { console.log(`Hi, I'm ${this._name}. I attack from a long range.`); }
    specialMove(): void { console.log(`${this._name} used ${this._specialMoveName}!`); }
}

const Yoshi = new MeleeCharacter('Yoshi', 'Egg Lay');
const Samus = new LongRangeCharacter('Samus', 'Charge Shot');

Yoshi.talk();
Yoshi.specialMove();

Samus.talk();
Samus.specialMove();