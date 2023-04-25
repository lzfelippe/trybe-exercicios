const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo

const toObject = ([name, brand, year]) => ({name, brand, year});

// const toObject = (array) => {
//     return {
//         modelo: array[0],
//         marca: array[1],
//         ano: array[2],
//     };
// }


console.log(toObject(chiron));


    