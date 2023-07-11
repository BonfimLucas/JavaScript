// IEEE 754-2008
let num1 = 0.7; // number
let num2 = 0.1; // number
let temp = num1 * 'Ola';

//num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.8
//num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.9
//num1 = ((num1 * 100) + (num2 * 100)) / 100; // 1.0

num1 = Number(num1.toFixed(2));

console.log(num1.toFixed(2));
console.log(Number.isInteger(1.00));

/* Função toString() faz um numero ser uma string podendo 
ser utilizado na variavel ou em uma linha de codigo apenas.

console.log(num1.toString() + num2);
num1 = num1.toString(); */

/* Ao utilizar o numero 2 dentro do parametro voce gera
a versao binaria do numero. 

console.log(num1.toString(2)); */


/* Função toFixed() é utilizada para arredondar valores
para uma casa decimal de valor x passado no parametro 

console.log(num1.toFixed(4)); */

/* Função isInteger utilizada para verificar se é um 
caractere inteiro ou não
console.log(Number.isInteger(num1)); */

/* NaN = Not a Number, ocorre quando um caractere não é
um numero
console.log(temp); */

//console.log(Number.isNaN(temp));