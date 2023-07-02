import React, { useState } from 'react';

function Form() {
    const [input, setInput] = useState({
      name: '',
      age: '',
      city: '',
      module: '',
    });

    // const [age, setAge] = useState('');
    // const [city, setCity] = useState('');
    // const [module, setModule] = useState();

  const handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setInput({...input, [name]: value});
  };




  return (
    <main>
        <h1>Formulário</h1>
        <form>
            <label htmlFor="name">Nome:
            <input
              type="text"
              name="name"
              value={ input.name }
              onChange={handleChange}
              // onChange={({target}) => setName(target.value)}
            />
            </label>
            <label htmlFor="age">Idade:
            <input
              type="number"
              name="age"
              value={ input.age }
              onChange={handleChange}
              // onChange={({target}) => setAge(target.value)}
            />
            </label>
            <label htmlFor="city">Cidade:
            <input
              type="text"
              name="city"
              value={ input.city }
              onChange={handleChange}
              // onChange={({target}) => setCity(target.value)}
            />
            </label>
            <label htmlFor="module">Módulo:
            Fundamentos
            <input
              type="radio"
              name="module"
              id="fundamentos"
              value="Fundamentos"
              checked={input.module === 'Fundamentos'}
              onChange={handleChange}
              // onChange={({target}) => setModule(target.value)}
            />
            FrontEnd
            <input
              type="radio"
              name="module"
              id="FrontEnd"
              value="FrontEnd"
              checked={input.module === 'FrontEnd'}
              onChange={handleChange}
              // onChange={({target}) => setModule(target.value)}
            />
            Backend
            <input
              type="radio"
              name="module"
              id="backend"
              value="BackEnd"
              checked={input.module === 'Backend'}
              onChange={handleChange}
              // onChange={({target}) => setModule(target.value)}
            />
            Ciência da Computação
            <input
              type="radio"
              name="module"
              id="ciencia-da-computacao"
              value="ciencia da computação"
              checked={input.module === 'Ciência da Computação'}
              onChange={handleChange}
              // onChange={({target}) => setModule(target.value)}
            />
            </label>
            <label>
            <button
              type="submit"
              onClick={(event) => {
                event.preventDefault();
                alert('Formulário enviado com sucesso!');
              }}
            >Enviar
            </button>
            </label>
        </form>
    </main>
  )
}

export default Form;