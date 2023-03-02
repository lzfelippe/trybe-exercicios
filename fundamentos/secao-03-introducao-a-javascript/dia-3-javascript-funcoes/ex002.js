let clientesTrybeBank = ['Ada', 'John', 'Gus'];

// escreva aqui sua função

function adicionaClientes(clientes) {

    if (typeof clientes === 'string') {
        clientesTrybeBank.push(clientes);
        return 'cliente adicionado com sucesso!';
    } else {
        return 'Insira uma String!';   
    }
}

console.log(adicionaClientes('Mário'));
console.log(adicionaClientes(true));
console.log(clientesTrybeBank);