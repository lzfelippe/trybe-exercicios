let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let media = 0;
let soma = 0;
let maior = numbers[0];
let menor = numbers[0];
let contImpar = 0;
let novoArray = [];

//Varias paradinhas
for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
    soma += numbers[index];
    media = soma / numbers.length;
}

console.log('A dos valores é: ' + soma);
console.log('A média dos valores é: ' + media);

if (media > 20) {
    console.log('Valor maior que 20');
} else {
    console.log('Valor menor que 20');
}

//Descobrir maior valor do array
for (index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > maior) {
        maior = numbers[index];
    }
}
console.log(maior);

// Conta quantos valores ÍMPARES tem no array 
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        contImpar += 1;
    }
}

if (contImpar === 0) {
    console.log('Nenhum valor ímpar encontrado');
} else {
    console.log(`São ${contImpar} números ÍMPARES`);
}


// descobre o menor valor do array
for (index = 1; index < numbers.length; index += 1) {
    if (numbers[index] < menor) {
        menor = numbers[index];
    }
}

console.log(menor);

//cria um array de 1 a 25
for (let index = 1; index <= 25; index += 1) {
    novoArray.push(index);
}
console.log(novoArray);

// imprime resultado da divisão de cada item do novoArray
for (let index = 0; index < novoArray.length; index += 1) {
    console.log('a divisão de ' + novoArray[index] + ' por 2 é: ' + (novoArray[index] / 2));
}



