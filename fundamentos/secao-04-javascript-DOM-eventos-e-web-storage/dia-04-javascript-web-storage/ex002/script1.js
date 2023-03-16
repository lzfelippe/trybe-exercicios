
const button = document.getElementById('add-button');
const input = document.getElementById('phrases-input');
const list = document.getElementById('phrases-list');

/*Essas linhas buscam elementos HTML pelo seu ID e atribuem a uma variável cada um deles. 
O elemento com ID add-button é um botão que, quando clicado, 
adiciona uma frase digitada em um campo de texto com ID phrases-input 
na lista de frases que será exibida em um elemento com ID phrases-list.*/ 


const insertPhraseInDOM = () => {
  const phrasesList = JSON.parse(localStorage.getItem('phrases'));
  const listLength = phrasesList.length - 1;
  const phraseText = phrasesList[listLength];
  const phrase = document.createElement('li');
  phrase.innerText = phraseText;
  list.appendChild(phrase);
}

/*Essa função é responsável por inserir uma nova frase na lista de frases exibida na página HTML. 
Ela obtém a lista de frases armazenada no localStorage e cria um novo elemento de lista HTML (<li>)
 contendo a última frase adicionada, adicionando-o à lista de frases exibida na página.*/ 

const addPhraseToLocalStorage = () => {
  const oldList = JSON.parse(localStorage.getItem('phrases'));
  const phraseText = input.value;
  oldList.push(phraseText);
  localStorage.setItem('phrases', JSON.stringify(oldList));
  insertPhraseInDOM();
}

/*Essa função é acionada quando o botão com ID add-button é clicado. Ela obtém a lista de frases armazenada no localStorage,
 adiciona uma nova frase digitada no campo de texto com ID phrases-input,
  armazena a lista atualizada no localStorage e insere a nova frase na lista exibida na página HTML,
   usando a função insertPhraseInDOM().*/

const initialRendering = () => {
  if (localStorage.getItem('phrases') === null) {
    localStorage.setItem('phrases', JSON.stringify([]));
  } else {
    const phrasesList = JSON.parse(localStorage.getItem('phrases'));
    const listLength = phrasesList.length - 1;
    for (let index = 0; index <= listLength; index += 1) {
      const listElement = document.createElement('li');
      listElement.innerText = phrasesList[index];
      list.appendChild(listElement);
    }
  }
}

/* Essa função é responsável por renderizar a lista de frases armazenada no localStorage na página HTML.
 Ela verifica se a lista de frases existe no localStorage. Se não existir, ela cria uma lista vazia.
  Se a lista existir, ela obtém a lista de frases armazenada no localStorage e insere cada frase na lista exibida na página HTML. */

button.addEventListener('click', addPhraseToLocalStorage);

window.onload = () => initialRendering();

/*Essas duas linhas são responsáveis por adicionar um evento de clique no botão com ID add-button que acionará a função addPhraseToLocalStorage() quando clicado. A segunda linha é responsável por chamar a função initialRendering() quando a página HTML é carregada.*/ 