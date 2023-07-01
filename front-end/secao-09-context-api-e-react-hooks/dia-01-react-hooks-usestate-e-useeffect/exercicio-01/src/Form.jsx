import React, { useState } from 'react';

function Form() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [city, setCity] = useState('');
    const [module, setModule] = useState();


  return (
    <main>
        <h1>Formulário</h1>
        <form>
            <label htmlFor="name">Nome:
            <input
              type="text"
              id="name"
              value={ name }
              onChange={({target}) => setName(target.value)}
            />
            </label>
            <label htmlFor="age">Idade:
            <input
              type="number"
              id="age"
              value={ age }
              onChange={({target}) => setAge(target.value)}
            />
            </label>
            <label htmlFor="city">Cidade:
            <input
              type="text"
              id="city"
              value={ city }
              onChange={({target}) => setCity(target.value)}
            />
            </label>
            <label htmlFor="module">Módulo:
            Fundamentos
            <input
              type="radio"
              name="module"
              id="fundamentos"
              value="Fundamentos"
              checked={module === 'Fundamentos'}
              onChange={({target}) => setModule(target.value)}
            />
            FrontEnd
            <input
              type="radio"
              name="module"
              id="FrontEnd"
              value="FrontEnd"
              checked={module === 'FrontEnd'}
              onChange={({target}) => setModule(target.value)}
            />
            Backend
            <input
              type="radio"
              name="module"
              id="backend"
              value="Backend"
              checked={module === 'Backend'}
              onChange={({target}) => setModule(target.value)}
            />
            Ciência da Computação
            <input
              type="radio"
              name="module"
              id="ciencia-da-computacao"
              value="Ciência da Computação"
              checked={module === 'Ciência da Computação'}
              onChange={({target}) => setModule(target.value)}
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