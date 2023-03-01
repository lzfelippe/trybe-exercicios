let num1 = 5;
let num2 = 5;
let num3 = 5;

if (num1 > num2 && num1 > num3) {
    console.log('O ' + num1 + ' é o maior');
} else if (num2 > num1 && num2 > num3) {
    console.log('O ' + num2 + ' é o maior');
} else if (num3 > num1 && num3 > num2) {
    console.log('O ' + num3 + ' é o maior');
} else {
    console.log('Os 3 números são iguais!');
}