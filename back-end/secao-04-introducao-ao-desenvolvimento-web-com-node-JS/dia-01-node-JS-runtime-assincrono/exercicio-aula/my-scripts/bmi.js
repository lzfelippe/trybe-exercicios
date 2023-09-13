const readline = require('readline-sync');

// const heightKg = 80;
// const weightCm = 170;

const heightKg = readline.questionInt("What's your height? ");
const weightCm = readline.questionFloat("What's your weight? ");

const handleBMI = (weight, height) => {
    console.log(`Weight: ${weight}, Height: ${height}`);

    const heightInMeters = height / 100
    const heightSquared = heightInMeters ** 2;
    
    const bmi = weight / heightSquared;

    return bmi;
    ;
}

const main = () => {
    const bmi = handleBMI(heightKg, weightCm);

    if( bmi < 18.5) {
        console.log('Você está abaixo do peso!');
    } else if ( bmi >= 18.5 && bmi < 24.9 ) {
        console.log('Está no peso normal!');
    } else if ( bmi >= 24.9 && bmi < 29.9 ) {
        console.log('Acima do peso!');
    } else if ( bmi >= 29.9 && bmi < 34.9 ) {
        console.log('Obesidade grau I');
    } else if ( bmi >= 34.9 && bmi < 39.9 ) {
        console.log('Obesidade grau II');
    } else {
        console.log('Obesidade morbida');
    }

    console.log(`BMI: ${bmi.toFixed(2)}`);
}


main();
