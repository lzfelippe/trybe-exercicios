class Estudante {
    private _registration: number;
    private _name: string;
    private _testGrade: number[] = [];
    private _homeworkGrade: number[] = [];

    constructor(registration: number, name: string) {
        this._registration = registration;
        this._name = name;
    }

    private gradeSum(testGrade: number[], homeworkGrade: number[]): number {
        const sumTestGrade = testGrade.reduce((acc, curr) => acc + curr);
        const sumHomeworkGrade = homeworkGrade.reduce((acc, curr) => acc + curr);

        return sumTestGrade + sumHomeworkGrade;
    }

    private averageGrade(testGrade: number[], homeworkGrade: number[]): number {
        const sumGrade = this.gradeSum(testGrade, homeworkGrade);

        return sumGrade / (testGrade.length + homeworkGrade.length);
    }

}