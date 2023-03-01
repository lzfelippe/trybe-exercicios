
function palindromo(palavra) {

    let invertePalavra = '';

    for (let index = palavra.length - 1; index >= 0; index -= 1) {
        invertePalavra += palavra[index];
    }

    if (palavra === invertePalavra) {
        return ('Sim, sou um palíndromo!')
    } else {
        return ('Infelizmente não sou um palíndromo!');
    }

}

