// ex01
class Estudante {
    private _registration: number;
    private _name: string;
    private _testGrade: number[];
    private _homeworkGrade: number[];
    

    constructor(
        registration: number, 
        name: string,
        ) {
        this._registration = registration;
        this._name = name;
        this._testGrade = [];
        this._homeworkGrade = [];
    }

    get registration_1(): number {
        return this._registration;
    }
    set registration_1(value: number) {
        this._registration = value;
    }

    get name(): string {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }

    get testGrade(): number[] {
        return this._testGrade;
    }
    set testGrade(value: number[]) {
        if (value.length !== 4) {
            throw new Error('a pessoa so pode ter 4 notas');
        }
        this._testGrade = value;
    }

    get homeworkGrade(): number[] {
        return this._homeworkGrade;
    }
    set homeworkGrade(value: number[]) {
        if (value.length !== 2) {
            throw new Error('a pessoa so pode ter 2 notas de trabalhos');
        }
        this._homeworkGrade = value;
    }
    

    // ex02
    gradeSum(): number {
        return [...this._testGrade, ...this._homeworkGrade]
            .reduce((curr, acc) => {
                acc += curr;
                return acc;
            }, 0);
    }
    
    // ex02
    averageGrade(): number {
        const sumGrades = this.gradeSum();
        const divider = this._testGrade.length + this._homeworkGrade.length;
        return sumGrades / divider;
    }
}

const student1 = new Estudante(251646, 'Felipe');
console.log(student1);


