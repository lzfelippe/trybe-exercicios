let saldo = 100;

function adicionaSaldo(valor) {
    return saldo + valor;
} 

function subtraiSaldo(valor) {
    return saldo - valor;
}

function multiplicaSaldo(valor) {
    return saldo * valor;
}

function divideSaldo(valor) {
    return saldo / valor;
}

console.log(adicionaSaldo(300));
console.log(subtraiSaldo(50));
console.log(multiplicaSaldo(3));
console.log(divideSaldo(5));