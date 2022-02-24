const letras = ["a", "b" , "c" , "d" , "e"];

var remove_letra = letras.reduce((remove_letra) => remove_letra.reduce("a"));

console.log(remove_letra);