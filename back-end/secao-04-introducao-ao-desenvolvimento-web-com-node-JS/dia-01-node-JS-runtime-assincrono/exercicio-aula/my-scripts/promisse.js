const readline = require('readline-sync');

const matematic = () => {
    const num1 = readline.questionInt("What's your first number? ");
    const num2 = readline.questionInt("What's your second number? ");
    const num3 = readline.questionInt("What's your third number? ");

    if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number') {
        return console.log('Only numbers are allowed');
    }

    const result = (num1 + num2) * num3;

    if (result < 50) {
        return console.log('Value too low');
    } else {
        return console.log('result: ', result);
    }
};

const main = () => {
    matematic();
}

main();