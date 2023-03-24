// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

//Adicione um evento click no elemento a que possui o id href.
//Na função do evento, implemente o método .preventDefault() para prevenir
//o comportamento padrão do elemento. Ou seja, ao clicar no link, nada deve acontecer.

function noOpenNewPage(event) {
    event.preventDefault();
    console.log(HREF_LINK.value);
}
HREF_LINK.addEventListener('click', noOpenNewPage);

//Adicione um evento click no elemento checkbox que possui o id input-checkbox.
//Na função do evento, implemente o método .preventDefault() para prevenir o comportamento
// padrão do elemento. Ou seja, ao clicar na caixinha, nada deve acontecer.

function noCheckBox (event) {
    event.preventDefault();
    console.log(INPUT_CHECKBOX.value);
}
INPUT_CHECKBOX.addEventListener('click', noCheckBox);

//Adicione um evento keypress no elemento input type="text" que possui o id input-text.
// Na função do evento, implemente o método .preventDefault() de forma que somente
// o caractere a (letra ‘a’ minúscula) possa ser digitado na caixinha. 
//(dica: para capturar a tecla digitada, utilize o event.key)
