// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

afterEach(() => jest.clearAllMocks());

it('fetches a joke', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  // primeira forma de usar o mock do fech
  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke),
  });

  // Outra forma de mock do fetch:

  // global.fetch = jest.fn(() => Promise.resolve({
  //   json: () => Promise.resolve(joke),
  // }));

  // terceira forma:

  // global.fetch = jest.fn(async () => ({
  //   json: async () => joke
  // }));

  render(<App />);
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith(
    'https://icanhazdadjoke.com/',
    { headers: { Accept: 'application/json' } },
  );
});

it('verifica se renderizar a página, a primeira piada é exibida na tela', async () => {
  const joke1 = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  const joke2 = {
    id: 'xXSv492wPmb',
    joke: 'What is red and smells like blue paint? Red paint!',
    status: 200,
  };

  // primeira forma de usar o mock do fech
  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({ // mocka a primeira chamada
    json: jest.fn().mockResolvedValue(joke1),
  });

  render(<App />);
  const button = screen.getByRole('button', { name: /New Joke/i }); // pega o botao

  expect(await screen.findByText(joke1.joke)).toBeInTheDocument();
  expect(screen.queryByText(joke2.joke)).not.toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(1);

  // primeira forma de usar o mock do fech
  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValueOnce({ // mocka a primeira chamada
    json: jest.fn().mockResolvedValue(joke2),
  });

  userEvent.click(button);  // clica no botão

  expect(await screen.findByText(joke2.joke)).toBeInTheDocument(); // verifica se a piada 2 está na tela
  expect(screen.queryByText(joke1.joke)).not.toBeInTheDocument(); // verifica se a piada 1 não está na tela
  expect(global.fetch).toHaveBeenCalledTimes(2); // verifica se o fetch foi chamado 2 vezes
  
});