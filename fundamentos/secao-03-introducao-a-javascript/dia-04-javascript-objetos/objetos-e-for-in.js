// Com base neste objeto, faça os exercícios a seguir.

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

// Imprima no console uma mensagem de boas-vindas para a personagem acima, na qual tenha o nome dela. Para isso, utilize a sintaxe meuObjeto.chave. Então, o valor esperado no console é:

  console.log(`Bem-vinda ${info.personagem}`);

// Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. Para isso, use a sintaxe meuObjeto['chave'] = valor. Então, o valor esperado no console é:

  info['recorrente'] = 'sim';

  console.log(info);

 // Faça um for/in que mostre todas as chaves do objeto

 for (keys in info) {
    console.log(keys);
 }

 // Faça um novo for/in, mas agora mostre todos os valores das propriedades do objeto
 
 for (value in info) {
    console.log(info[value]);
 }

 let info2 = {
    personagem: 'Tio Patinhas',
    origem: `Christmas on Bear Mountain, Dell´s Four Color Comics #178`,
    nota: 'O último MacPatinhas',
    recorrente: 'sim',
  };

  




  
  