//Mision 3.Consigna 2: Manipulamos el DOM.
const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');
//Modificar el valor al input
const quantity = document.querySelector('#quantity');
//Escucha el evento
add.addEventListener('click', () => quantity.value = Number(quantity.value) + 1);
subtract.addEventListener('click', () => {

quantity.value = Number(quantity.value) - 1

})