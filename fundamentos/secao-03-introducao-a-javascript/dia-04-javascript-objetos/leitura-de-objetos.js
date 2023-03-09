let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
        {
            titulo: 'O Pior Dia de Todos',
            autor: 'Daniela Kopsch',
            editora: 'Tordesilhas',
        },
    ],
};

console.log(`O livro favorito de ${leitor.nome} ${leitor.sobrenome} se chama '${leitor.livrosFavoritos[0].titulo}'`);

/* leitor.livrosFavoritos.titulo = 'Harry Potter e o Prisioneiro de Azkaban';
leitor.livrosFavoritos.autor = 'JK Rowling';
leitor.livrosFavoritos.editora = 'Rocco'; */

leitor.livrosFavoritos = {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  }

console.log(leitor);


