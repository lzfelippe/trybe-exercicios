const reader = {
    name: 'Julia',
    lastName: 'Pessoa',
    age: 21,
    favoriteBooks: [
      {
        title: 'O Senhor dos Anéis - a Sociedade do Anel',
        author: 'J. R. R. Tolkien',
        publisher: 'Martins Fontes',
      },
    ],
  };

  // 1 - Acesse as chaves name, lastName e title e exiba informações em um console.log() no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Senhor dos Anéis - a Sociedade do Anel’.”.

  // console.log(`O livro favorito de ${reader.name} ${reader.lastName} se chama "${reader.favoriteBooks[0].title}".`);
  
  // 2 - Adicione um novo livro favorito na chave favoriteBooks, que é um array de objetos. Atribua a essa chave um objeto que contenha as seguintes informações:

const addBooks = (array, obj) => {
  if (array) {
    array.push(obj)
  }
};

addBooks(reader.favoriteBooks,{
  title: 'Harry Potter e o Prisioneiro de Azkaban',
  author: 'JK Rowling',
  publisher: 'Rocco',
});

// console.log(reader);

// 3 - Acesse as chaves name e favoriteBooks e faça um console.log() no seguinte formato:

const quantBooks = reader.favoriteBooks.length;

// quantBooks > 1 
//   ? console.log(`${reader.name} tem ${quantBooks} livros favoritos.`)
//   : console.log(`${reader.name} tem ${quantBooks} livro favorito.`)
  

// console.log(`${reader.name} tem ${quantBooks} livro favoritos.`);


const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (fullOrder) => {
  // Adicione abaixo as informações necessárias.
  const deliveryPerson = fullOrder.order.delivery.deliveryPerson;
  const costumerName = fullOrder.name;
  const phoneNumber = fullOrder.phoneNumber;
  const street = fullOrder.address.street;
  const addressNumber = fullOrder.address.number;
  const apartment = fullOrder.address.apartment;

  return `Olá, ${deliveryPerson}, entrega para: ${costumerName}, Telefone: ${phoneNumber}, ${street}, Número: ${addressNumber}, AP:${apartment}.`
}

// console.log(customerInfo(order));

const orderModifier = (fullOrder) => {
  // Adicione abaixo as informações necessárias.

  fullOrder.name = 'Luiz Silva';
  fullOrder.payment.total = 50;

  const pizzas = Object.keys(fullOrder.order.pizza).join(', ');
  


  return `Olá, ${fullOrder.name}, o valor total do seu pedido de ${pizzas} e ${order.order.drinks.coke.type} é R$${(fullOrder.payment.total).toFixed(2)}`
}

// console.log(orderModifier(order));
// 'Olá, Luiz Silva, o valor total de seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.'

// 🚀 Manipulação de objetos: Parte 3

const school = {
  lessons: [
    {
      course: 'Python',
      students: 20,
      professor: 'Carlos Patrício',
      shift: 'Manhã',
    },
    {
      course: 'Kotlin',
      students: 10,
      professor: 'Gabriel Oliva',
      shift: 'Noite',
    },
    {
      course: 'JavaScript',
      students: 738,
      professor: 'Gustavo Caetano',
      shift: 'Tarde',
    },
    {
      course: 'MongoDB',
      students: 50,
      shift: 'Noite',
    },
  ]
};

// Crie uma função que obtenha o valor da chave de acordo com sua posição no array. Essa função deve possuir dois parâmetros: o objeto e a posição no array.

const getValue = (object, position) => Object.values(object.lessons)[position];

// console.log(getValue(school, 0));

//Crie uma função que retorne a soma do número total de estudantes em todos os cursos.

const sumStudents = ({lessons}) => {
  let totalStudents = 0;

  for (let index = 0; index < lessons.length; index += 1) {
    totalStudents += lessons[index].students;
  }
  return totalStudents;
};

// console.log(sumStudents(school));

// Crie uma função que verifica se uma determinada chave existe em todos os elementos do array lessons. O retorno deve ser um booleano (true ou false). Essa função deve possuir dois parâmetros: o objeto e o nome da chave.

const findKey = ({lessons}, key) => {
  for (let index = 0; index < lessons.length; index += 1) {
    if (lessons[index][key] === undefined) {
      return false;
    } 

    return true;
    
  }
};

// console.log(findKey(school, 'professor'));

// Crie uma função para alterar o turno para noite no curso de Python. Essa função deve ter três parâmetros: a base de dados a ser modificada, o nome do curso e o novo valor da chave.

const changeShift = (object, course, shift) => {
  const { lessons } = object;

  for(let index = 0; index < lessons.length; index += 1) {
    if (lessons[index].course === course) {
      lessons[index].shift = shift;
    }
  }
  return object;
};

// console.log(changeShift(school, 'Python', 'Noite'));

// 🚀 Manipulação de objetos: Parte 4

const fruitCounter = {};

const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

const counterFruits = (array) => {
  let countMelancia = countAbacate = countLaranja = countUva = countPera = countJaca = countBanana = 0;

  array.forEach(fruit => {
    if(fruit === 'Melancia') {
      countMelancia = countMelancia += 1  
      fruitCounter.Melancia = countMelancia;
      // console.log(countMelancia);
    }
    if(fruit === 'Abacate') {
      countAbacate += 1  
      fruitCounter.Abacate = countAbacate;
    }
    if(fruit === 'Laranja') {
      countLaranja += 1  
      fruitCounter.Laranja = countLaranja;
    }
    if(fruit === 'Uva') {
      countUva += 1  
      fruitCounter.Uva = countUva;
    }
    if(fruit === 'Pera') {
      countPera += 1  
      fruitCounter.Pera = countPera;
    }
    if(fruit === 'Jaca') {
      countJaca += 1  
      fruitCounter.Jaca = countJaca;
    }
    if(fruit === 'Banana') {
      countBanana += 1  
      fruitCounter.Banana = countBanana;
    }
  });
  return fruitCounter;
};

console.log(counterFruits(basket));

const entries = Object.entries(fruitCounter);
// console.log('BASKET', fruitCounter);

console.log('ENTRIES:', entries);


let newArray = [];

for (let index = 0; index < entries.length; index += 1) {
  if (entries[index][1] > 1) {
    newArray.push(`${entries[index][1]} ${entries[index][0]}s`);
  } else {
    newArray.push(`${entries[index][1]} ${entries[index][0]}`);
  }
};

console.log(`Sua cesta possui ${newArray.join(', ')}.`);



  












