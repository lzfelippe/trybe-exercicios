// ARRAY.FOREACH

// primeiro teste de estrutura forEach
//  const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];

// arrayOfValues.forEach((element, index) => {
//   console.log(`O elemento atual é: ${element} e possui o index: ${index}`);
// });

// const pessoasAprovadas = ['Ana Beatriz', 'Caio Nunes', 'Afonso Ribeiro', 'Leonardo Lins']; 
// // lista de nomes

// pessoasAprovadas.forEach((nome, index) => {
//     pessoasAprovadas[index] = pessoasAprovadas[index].toLocaleUpperCase(); 
//     // acessa cada elemento do array e atualiza para letra maiúscula
// });

// console.log(pessoasAprovadas);

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// numbers.forEach((element) => console.log(element * 2)); // tudo em uma linha
//     // [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]

// const multiply = (element) => { // utilizando uma função como Callback da Hof ForEach
//     console.log(element * 2);
// }

// numbers.forEach(multiply); // chamando a Hof com a função como callback

// ARRAY.FIND

// const idades = [18, 21, 42, 20, 19, 21, 30, 73, 82, 45, 48, 50];

// idades.find((idade) => idade < 20); // 18
// idades.find((idade) => idade > 50); // 73

// Array.SOME()

const pessoas = [
    { nome: 'Ana', cargo: 'Analista' },
    { nome: 'João', cargo: 'Gerência' },
    { nome: 'Aline', cargo: 'Analista' },
    { nome: 'Joana', cargo: 'Gerência' },
  ];
  
  const verificaCargo = pessoas.some((pessoa) => pessoa.cargo === 'Product Owner');
  
  console.log(verificaCargo); // false

const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('X', listNames)); // false

// Array.EVERY()

