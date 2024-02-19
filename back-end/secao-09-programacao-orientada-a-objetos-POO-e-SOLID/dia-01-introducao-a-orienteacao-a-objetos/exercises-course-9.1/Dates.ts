class Data {
    private day: number;
    private month: number;
    private year: number;

    constructor(day: number, month: number, year: number) {
        this.day = day;
        this.month = month;
        this.year = year;
        if (this.day < 1 || this.day > 31) {
            console.log('01/01/1900');
        }
    }

    getMonthName(): string {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
            'October', 'November', 'December'];
        return months[this.month - 1];
    }

    isLeapYear(): boolean {
        if (this.year % 4 === 0 && this.year % 100 !== 0) {
            return true;
        } else if (this.year % 400 === 0) {
            return true;
        } else {
            return false;
        }
    }

    compare(): number {
        const today = new Date();
        const todayDay = today.getDate();
        const todayMonth = today.getMonth() + 1;
        const todayYear = today.getFullYear();
        if (this.year > todayYear) {
            return -1;
        } else if (this.year < todayYear) {
            return 1;
        } else if (this.month > todayMonth) {
            return -1;
        } else if (this.month < todayMonth) {
            return 1;
        } else if (this.day > todayDay) {
            return -1;
        } else if (this.day < todayDay) {
            return 1;
        } else {
            return 0;
        }
    }

    format(format: string): string {
        const day = this.day.toString().padStart(2, '0');
        const month = this.month.toString().padStart(2, '0');
        const year = this.year.toString().padStart(4, '0');
        if (format === 'dd/mm/yyyy') {
            return `${day}/${month}/${year}`;
        } else if (format === 'dd-mm-yyyy') {
            return `${day}-${month}-${year}`;
        } else if (format === 'mm/dd/yyyy') {
            return `${month}/${day}/${year}`;
        } else if (format === 'mm-dd-yyyy') {
            return `${month}-${day}-${year}`;
        } else if (format === 'yyyy/mm/dd') {
            return `${year}/${month}/${day}`;
        } else if (format === 'yyyy-mm-dd') {
            return `${year}-${month}-${day}`;
        } else {
            return 'Formato inválido';
        }
    }
}