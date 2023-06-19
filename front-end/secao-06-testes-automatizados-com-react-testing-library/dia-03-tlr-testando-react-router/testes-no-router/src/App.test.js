import React from 'react';
import { screen, act } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import userEvent from '@testing-library/user-event';
import App, { About } from './App';

describe('Teste da aplicação toda', () => {
  it('deve renderizar o componente App', () => {
    renderWithRouter(<App />);

    const homeTitle = screen.getByRole('heading', { name: 'Você está na página Início' });
    expect(homeTitle).toBeInTheDocument();
  });

  it('deve renderizar o componente Sobre', () => {
    const { history } = renderWithRouter(<App />); // desconstroi o history do renderWithRouter

    const aboutLink = screen.getByRole('link', { name: 'Sobre' }); // pega o elemento link e clica nele
    expect(aboutLink).toBeInTheDocument();
    userEvent.click(aboutLink);

    const { pathname } = history.location; // verifica se está na pagina correta
    expect(pathname).toBe('/about');

    const aboutTitle = screen.getByRole('heading', // verifica se o texto é exibido na tela
      { name: 'Você está na página Sobre' });
    expect(aboutTitle).toBeInTheDocument();
  });

  it('deve testar um caminho não existente e a renderização do Not Found', () => {
    const { history } = renderWithRouter(<App />); 

    act(() => {
      history.push('/pagina/que-nao-existe/'); // faz o redirecionamento para uma pagina que não existe
    })

    const notFoundTitle = screen.getByRole('heading', // verifica se o texto é exibido na tela
      { name: 'Página não encontrada' });
    expect(notFoundTitle).toBeInTheDocument();
  });

  it('deve renderizar o componente About (apenas componente)', () => {
    renderWithRouter(<About />);
  
    const aboutTitle = screen.getByRole('heading',
      { name: 'Você está na página Sobre' });
    expect(aboutTitle).toBeInTheDocument();
  });
});