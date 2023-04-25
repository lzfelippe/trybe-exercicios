// ARRAY DESTRUCTURING

//Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação.

// const primeNumbers = [17, 23, 37]

// const sum = (a, b) => {
//   console.log(a + b);
// }

// sum(primeNumbers[0], primeNumbers[2]) // 54

//Produza o mesmo resultado acima, porém utilizando array destructuring

// const [fistNumber, secondNumber, thirdNumber] = primeNumbers

// const sum = (a, b) => {
//     console.log(a + b);
// };

// sum(fistNumber, thirdNumber);

// A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays, corrija os valores das variáveis.

// let comida = 'gato';
// let animal = 'água';
// let bebida = 'arroz';

// console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

// [comida, animal, bebida] = [bebida, comida, animal];
// console.log(comida, animal, bebida);

// O array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir. Através de array destructuring, faça com que existam apenas números pares na variável numerosPares.

// let numerosPares = [1, 3, 5, 6, 8, 10, 12];

// console.log(numerosPares); // [6, 8, 10, 12];

// // Utilize array destructuring para produzir o resultado esperado pelo console.log acima

// [,,, ...numerosPares] = numerosPares;
// console.log(numerosPares);


// DEFAULT DESTRUCTURING

// Do jeito que está, quando person é passado para a função getNationality, o retorno é João is undefined. Ajuste a função getNationality para que a chamada getNationality(person) retorne João is Brazilian.

// const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

// const person = {
//   firstName: 'João',
//   lastName: 'Jr II',
// };

// const otherPerson = {
//   firstName: 'Ivan',
//   lastName: 'Ivanovich',
//   nationality: 'Russian',
// };

// console.log(getNationality(otherPerson)); // Ivan is Russian
// console.log(getNationality(person));

// OBJECT PROPERTY SHORTHAND

// const getPosition = (latitude, longitude) => ({
//     latitude,
//     longitude,
//   });
  
//   console.log(getPosition(-19.8157, -43.9542));

// DEFAULT PARAMETERS

// const greeting = (user) => {
//     const userDisplay = typeof user === 'undefined' ? 'pessoa usuária' : user;
//     console.log(`Welcome ${userDisplay}!`);
//   };
  
//   greeting(); // Welcome pessoa usuária!
  
// const multiply = (number, value = 1) => {
//     return number * value;
    
//   };
  
//   console.log(multiply(8));

const numbers = [3, 12, 1, 21, 23];
const foundElements = numbers.find((element) => element > 10);
console.log(foundElements);

const products = [
    {
      name: 'laptop',
      price: 1000,
      id: 3,
    },
    {
      name: 'desktop',
      price: 1500,
      id: 2,
    },
    {
      name: 'phone',
      price: 500,
      id: 1,
    },
  ];
  
  console.log(products.sort((a, b) => b.price - a.price)); 

  const adult = [
    {
      weight: 100,
      height: 1.85,
    },
    {
      weight: 90,
      height: 1.72,
    },
    {
      weight: 79,
      height: 1.99,
    },
  ];
  
  // IMC = Índice de Massa Corporal
  
  function IMC(person) {
    return parseFloat((person.weight/(Math.pow(person.height,2))).toFixed(2));
  }
  
  console.log(adult.map(IMC));
  

  const cart = [
    {
      name: "laptop",
      price: 1000,
      quantity: 2,
      id: 3,
    },
    {
      name: "desktop",
      price: 1500,
      quantity: 1,
      id: 2,
    },
    {
      name: "phone",
      price: 500,
      quantity: 3,
      id: 1,
    },
  ];
  
  // escreva seu código aqui
  const valorInicial = 0;
  const totalCart = cart.reduce((accumulator, product) => accumulator + product.price * product.quantity, valorInicial);
  
  
    
  
  
  // fim do código
  
  console.log(totalCart);

  const firstArray = [3, 5, 7];
  const secondArray = [2, firstArray..., 4];
  console.log(secondArray);
  
  