// let nome = prompt("Digite seu nome");
// console.log("Ola, tudo bem com voc " + nome + "!");

// let n1 = Number(prompt("Qual o primeiro numero: "));
// let n2 = Number(prompt("Qual o segundo numero: "));
// let resultado = n1 + n2;
// let media = (n1 + n2) / 2;
// console.log("Soma e: " + resultado);
// console.log("Media e: " + media);

let peso = Number(prompt("Qual o seu peso: "));
let altura = Number(prompt("Qual sua altura: "));

let imc = peso / (altura ** 2);
console.log("Seu IMC e: " + imc.toFixed(2));

if (imc <= 18) {
  console.log("Baixo");
} else if (imc > 18 && imc <= 24) {
  console.log("Normal");
} else {
  console.log("sobrepeso");
}
let idade = 18;
if (idade != 18) {
  console.log("As idades sao diferentes");
} else {
  console.log("As idades nao sao iguais");
}

const h1 = document.getElementById("resultado");
console.log(h1);
h1.textContent = `Seu IMC é: ${imc.toFixed(2)}`;

// && todas devem ser igual true
// || se alguma condicao for true, vai entrar no if
// ! ele vai inverter os valores

if (!(idade >= 18)) {
  console.log("teste se der True");
} else {
  console.log("Teste se der False");
}
