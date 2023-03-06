let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (let key in car) {
    console.log(`${key} : ${car[key]}`);
    
  }

  const student = {}

  // funcão pra adicionar propridades a um objeto chave e valor
  function addProperty(object, key, value) {
      object[key] = value;
  };
  
  addProperty(student, 'nome', 'Fulano');
  
  console.log(student);
  