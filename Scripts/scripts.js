const mensajeDeBienvenida = "Bienvenido al curso de Javascript ";
let nombre = prompt("Hola! Ingrese su nombre");
let edad = parseInt(prompt("Para poder validar su edad, ingresela Aqui:"));
console.log(typeof edad);
if (edad >= 18) {
    alert(mensajeDeBienvenida + nombre + "! ");
} else {
    alert(mensajeDeBienvenida + " Lo siento " + nombre + ", debes ser mayor de edad.");
}