/** 
 * Aritméticos:
 * + Adição / concatenação
 * - subtração
 * / divisão
 * * multiplicação
 * ** potenciação
 * % resto da divisão
*/
 
/**
 * Ordem de leitura:
 * () Parenteses
 * * Multiplicação
 * / % divisão ou resto da divisão
 * + - adição ou subtração
 */

const num1 = 5;
const num2 = 10;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 / num2);
console.log(num1 * num2);
console.log(num1 ** num2);
console.log(num1 % num2);


/*
Incremento = ++
Decremento = --

 */


let contador = 1;
contador++; // 2
contador++; // 3
contador++; // 4
contador++; // 5
console.log(contador); 

let contador2 = 10;
console.log(--contador);
console.log(--contador);

let contador3 = 1;
console.log(contador++);
console.log(contador);


let contador4 = 0;
contador += 2;
contador += 2;
contador += 2;
console.log(contador);

// Nan - Not a number
// parseInt (inteiro)
// parseFloat(decimais)
const numx = 10;
const numy = parseFloat('5.2');
console.log(num1 + num2);
console.log(typeof num2);