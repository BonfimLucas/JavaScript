// String, number, undefined, null, boolean

const nome = 'Lucas'; // string
const nome1 = "Lucas"; // string
const nome2 = `Lucas`; // string

const num1 = 10; // number
const num2 = 10.43; // number

let nomeAluno; // undefined -> não aponta pra local nenhum na memoria
const sobrenomeAluno = null; // Nulo -> não aponta pra local nenhum na memoria

const aprovado = true; // boolean (true ou false) logico


console.log(typeof nome, nome);
console.log(typeof num1, num1);
console.log(typeof nomeAluno, nomeAluno);
console.log(typeof sobrenomeAluno, sobrenomeAluno);
console.log(typeof aprovado, aprovado);

const a = 2;
const b = a;
console.log(a, b); // 2, 2
 
a = 3;
console.log(a, b); // 3, 2

