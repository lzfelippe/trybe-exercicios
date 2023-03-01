function numerosPrimos(numero) {
    let primos = [];
    for (let i = 2; i <= numero; i++) {
      let divisorEncontrado = false;
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          divisorEncontrado = true;
          break;
        }
      }
      if (!divisorEncontrado) {
        primos.push(i);
      }
    }
    return primos;
  }

  numerosPrimos(15);
