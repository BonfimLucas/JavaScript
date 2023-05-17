const nome = 'Lucas';
const sobrenome = 'Bonfim';
const idadeFAKE = 30;
const peso = 90;
const altura = 1.85;
let imc = peso / (altura * altura);
let anoNascimentoFAKE = 2023 - idadeFAKE;

console.log(`${nome} ${sobrenome} tem ${idadeFAKE} anos, pesa ${peso} kilos`);
console.log(`tem ${altura} de altura e seu imc é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimentoFAKE}`);

