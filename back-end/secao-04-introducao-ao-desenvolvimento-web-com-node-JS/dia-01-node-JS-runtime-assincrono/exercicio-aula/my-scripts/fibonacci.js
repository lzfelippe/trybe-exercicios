const readline = require('readline-sync');

const fibonacci = (num) => {
    let a = 1;
    let b = 1;

    for(let n = num; n >= 0; n -= 1) {
        if (b) console.log(b);

        const temp = a;
        a += b;

        b = temp;
    }
    console.log(b);
    return b;
}

const main = () => {
    const num = readline.questionInt("What's your number? ");
    if (num < 0) {
        console.log('Number must be positive');
        return;
    };

    console.log('num: ', num);
    fibonacci(num - 2);
}

main();
