const num1 = Number(prompt('Digite um numero: '));
const numeroTitulo = document.getElementById('numero-titulo');
const caixaTexto = document.getElementById('texto');

numeroTitulo.innerHTML = num1;

caixaTexto.innerHTML += `Raiz quadrada: ${num1 ** (1/2)}<br/>`;
caixaTexto.innerHTML += `${num1} é inteiro: ${Number.isInteger(num1)}<br/>`;
caixaTexto.innerHTML += `É NaN?: ${Number.isNaN(num1)}<br/>`;
caixaTexto.innerHTML += `Arredondando para baixo: ${Math.floor(num1)}<br/>`;
caixaTexto.innerHTML += `Arredondando para cima: ${Math.ceil(num1)}<br/>`;
caixaTexto.innerHTML += `Com duas casas decimais: ${num1.toFixed(2)}<br/>`;