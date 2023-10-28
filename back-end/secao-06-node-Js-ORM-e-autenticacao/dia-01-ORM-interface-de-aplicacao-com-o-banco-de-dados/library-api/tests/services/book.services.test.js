const { expect } = require('chai');
const { stub } = require('sinon');
const { Book } = require('../../src/database/models');
const BooksService = require('../../src/database/services/books.service');

const bookMock = {
    id: 1,
    title: 'The Lord of the Rings',
    author: 'J. R. R. Tolkien',
    pageQuantity: 1216,
    publisher: 'George Allen & Unwin',
    createdAt: '2021-08-31T23:45:13.000Z',
    updatedAt: '2021-08-31T23:45:13.000Z',
};

describe('Book service', () => {
    describe('testa o método getAll', () => {
        const stubbedFindAll = stub(Book, 'findAll');
        let books;

        describe('quando não existem livros cadastrados', () => {
            before(async () => {
                stubbedFindAll.resolves([]);
                books = await BooksService.getAll();
            });

            after(() => stubbedFindAll.reset());
            
            it('chama o findAll', () => {
                expect(Book.findAll.calledOnce).to.be.equals(true);
            });

            it('retorna um array', () => {
                expect(books).to.be.an('array');
            });

            it('o array está vazio', () => {
                expect(books).to.be.empty;
            });

        });

        describe('quando existem livros cadastrados', () => {
            before(async () => {
                stubbedFindAll.resolves([bookMock]);
                books = await BooksService.getAll();
            });

            after(() => stubbedFindAll.reset());

            it('chama o Book.findAll', () => {
                expect(Book.findAll.calledOnce).to.be.equals(true);
            });

            it('retorna um array', () => {
                expect(books).to.be.an('array');
            });

            it('o array não está vazio', () => {
                expect(books).to.be.not.empty;
            });

            it('o array retorna objetos', () => {
                expect(books).to.be.an([bookMock]);
            });
        });
    });

    describe('testa o método getById', () => {
            const stubbedFindById = stub(Book, 'findById');
            let book;

        describe('quando existe um livro com o id informado', () => {
            before(async () => {
                stubbedFindById.resolves(bookMock);
                book = await BooksService.getById(1);
            });

            after(() => stubbedFindById.reset());

            it('chama o findById', () => {
                expect(Book.findById.calledOnce).to.be.equals(true);
            });

            it('retorna um objeto', () => {
                expect(book).to.be.an('object');
            });

            it('o objeto possui as propriedades "title", "author", "pageQuantity" e "publisher"', () => {
                expect(book).to.have.all.keys('title', 'author', 'pageQuantity', 'publisher');
            });

            it('o objeto possui os valores corretos', () => {
                expect(book).to.be.deep.equals(bookMock);
            });
        });

        describe('quando não existe um livro com o id informado', () => {
            before(async () => {
                stubbedFindById.resolves(null);
                book = await BooksService.getById(999);
            });

            after(() => stubbedFindById.reset());

            it('chama o findById', () => {
                expect(Book.findById.calledOnce).to.be.equals(true);
            });

            it('retorna null', () => {
                expect(book).to.be.equals(null);
            });
        });
    });

    describe('testa o metodo createBook', () => {
        describe('retorna o registro do livro criado', () => {
          const createStub = stub(Book, 'create');
          const testBook = {
            title: 'The Da Vinci Code',
            author: 'Dan Brown',
            pageQuantity: 689,
          };
          let book;
    
          before(async () => {
            createStub.resolves({
              id: 2,
              ...testBook,
              updatedAt: '2022-01-28T15:45:28.398Z',
              createdAt: '2022-01-28T15:45:28.398Z',
            });
    
            book = await BooksService.create(testBook);
          });
    
          after(() => {
            createStub.reset();
          });
    
          it('called Book.create', async () => {
            expect(Book.create.calledOnce).to.be.equals(true);
          });
    
          it('a resposta é um objeto contendo os dados do livro', async () => {
            expect(book).to.include(testBook); // como o objeto retornado tem menos atributos do que os esperados usamos o matcher include
          });
        });
      });

      describe('testa o modo updateBook', () => {
        const updateStub = stub(Book, 'update');
    
        const testBook = {
          title: 'The Va Cinci Dode',
          author: 'Ban Drown',
          pageQuantity: 589,
        };
    
        let updated;
    
        describe('quando existe o livro', () => {
          before(async () => {
            updateStub.resolves([true]);
            updated = await BooksService.update(2, testBook);
          });
    
          after(() => {
            updateStub.reset();
          });
    
          it('called Book.update', async () => {
            expect(Book.update.calledOnce).to.be.equals(true);
          });
    
          it('retorna true', async () => {
            expect(updated).to.be.true;
          });
        });
    
        describe('quando não existe o livro', () => {
          before(async () => {
            updateStub.resolves([false]);
            updated = await BooksService.update(1000, testBook);
          });
    
          after(() => {
            updateStub.reset();
          });
    
          it('called Book.update', async () => {
            expect(Book.update.calledOnce).to.be.equals(true);
          });
    
          it('retorna 0', async () => {
            expect(updated).to.be.false;
          });
        });
      });

      describe('#update', () => {
        const updateStub = stub(Book, 'update');
    
        const testBook = {
          title: 'The Va Cinci Dode',
          author: 'Ban Drown',
          pageQuantity: 589,
        };
    
        let updated;
    
        describe('quando existe o livro', () => {
          before(async () => {
            updateStub.resolves([true]);
            updated = await BooksService.update(2, testBook);
          });
    
          after(() => {
            updateStub.reset();
          });
    
          it('called Book.update', async () => {
            expect(Book.update.calledOnce).to.be.equals(true);
          });
    
          it('retorna true', async () => {
            expect(updated).to.be.true;
          });
        });
    
        describe('quando não existe o livro', () => {
          before(async () => {
            updateStub.resolves([false]);
            updated = await BooksService.update(1000, testBook);
          });
    
          after(() => {
            updateStub.reset();
          });
    
          it('called Book.update', async () => {
            expect(Book.update.calledOnce).to.be.equals(true);
          });
    
          it('retorna 0', async () => {
            expect(updated).to.be.false;
          });
        });
      });
    
});
