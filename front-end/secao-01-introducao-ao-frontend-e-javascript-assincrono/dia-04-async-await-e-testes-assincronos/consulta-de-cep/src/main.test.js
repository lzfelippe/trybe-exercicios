import { handleClick } from "./main";

describe('Quando a requisição é bem sucedida, ela retorna os dados esperados', () => {
    test('deve retornar os dados quando passamos um cep válido', async () => {
        const address = await handleClick('30130010');
        expect(address.cep).toBe('30130-010');
        expect(address.logradouro).toBe('Praça Sete de Setembro');
        expect(address.bairro).toBe('Centro');
        expect(address.uf).toBe('MG');
    });
    test('deve aceitar cep com hífen ou sem hífen', async () => {
    let address = await handleClick('30130010');
    expect(address.cep).toBe('30130-010');
    
    address = await handleClick('30130-010');
    expect(address.cep).toBe('30130-010');
    });
});

describe('Quando a requisição é bem sucedida, ela retorna os dados esperados', () => {
    test('Deve lançar erro "Você precisa passar um CEP" quando passar cep vazio', async () => {
        const emptyCep = '';
      
        await expect(handleClick(emptyCep)).rejects.toThrow(
          new Error('Você precisa passar um CEP')
        );
      });
      test('Deve lançar erro quando passar cep inválido', async () => {
        const invalidCep = 'XXXXX-XXX';
        const invalidCepLessDigits = '00000-00';
        const invalidCepMoreDigits = '00000-0000';
      
        await expect(handleClick(invalidCep)).rejects.toThrow();
        await expect(handleClick(invalidCepLessDigits)).rejects.toThrow();
        await expect(handleClick(invalidCepMoreDigits)).rejects.toThrow();
      });


});