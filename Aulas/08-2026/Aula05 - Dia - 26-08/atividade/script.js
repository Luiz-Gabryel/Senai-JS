// Atividade facil

// 1. Verificar maioridade
console.log("Atividade 1");
let idade1 = 18;
if (idade1 >= 18) {
  console.log("Voce e maior de idade");
} else {
  console.log("Voce e menor de idade");
}
console.log("Fim da atividade 1");

//2. Positivo ou Negativo
console.log("Atividade 2");
let numero1 = Number(prompt("Digite um numero: "));
if (numero1 <= 0) {
  console.log("ele e Positivo");
} else {
  console.log("Ele e Negativo");
}
console.log("Fim da atividade 2");

//3. Aprovação em uma prova
console.log("Atividade 3");
let nota = Number(prompt("Digite sua nota:"));

if (nota > 100) {
  console.log("Nota máxima é 100. Você fez errado");
} else if (nota >= 60) {
  console.log("Você passou");
} else {
  console.log("Reprovado");
}
console.log("Fim da atividade 3");

//4. Positivo, Negativo ou Zero
console.log("Atividade 4");
let numero2 = Number(prompt("Digite um numero: (Atividade 4)"));
if (numero2 > 0) {
  console.log("Número Positivo");
} else if (numero2 < 0) {
  console.log("Número Negativo");
} else {
  console.log("Zero");
}

//5. Classificação por idade
console.log("Atividade 5");
let idade2 = Number(prompt("Qual sua idade (Atividade 5)"));
if (idade2 <= 12) {
  console.log("Criança");
} else if (idade2 <= 17) {
  console.log("Adolescente");
} else {
  console.log("Adulto");
}

//6. Par ou Ímpar
console.log("Atividade 6");
let numero3 = Number(prompt("Digite um numero (Atividade 6)"));
let resto = numero3 % 2;

if (resto === 0) {
  console.log("Número é par");
} else {
  console.log("Número é ímpar");
}
console.log("Fim Atividade 6");

// Atividade Intermediario

//7. Calculadora simples
console.log("Atividade 7");

let numero4 = Number(prompt("Qual Primeiro Numero (Atividade 7)"));
let op = prompt("Solicite a operação desejada (+, -, * ou /) ");
let nuemro5 = Number(prompt("Qual Segundo numero (Ativide 7)"));

let resultado;

if (op == "+") {
  resultado = numero4 + nuemro5;
} else if (op == "-") {
  resultado = numero4 - nuemro5;
} else if (op == "*") {
  resultado = numero4 * nuemro5;
} else if (op == "/") {
  if (nuemro5 == 0) {
    alert("Nao posso realizar com zero");
  } else {
    resultado = numero4 / nuemro5;
  }
} else {
  resultado = "nao podemos fazer essa operação";
}

alert("O resultado é: " + resultado);

console.log("Fim Atividade 7");

//8. Maior entre três números
console.log("Atividade 8");
let numero6 = Number(prompt("Digite o primeiro numero (Atividade 8)"));
let numero7 = Number(prompt("Digite o segundo numero (Atividade 8)"));
let numero8 = Number(prompt("Digite o terceiro numero (Atividade 8)"));

if (numero6 >= numero7 && numero6 >= numero8) {
    console.log("Numero " + numero6 + " e maior");
} else if (numero7 >= numero6 && numero7 >= numero8) {
    console.log("Numero " + numero7 + " e maior");
} else {
    console.log("Numero " + numero8 + " e maior");
}

console.log("Fim Atividade 8");

//9. Desconto em compras
let
//10. Sistema de login
console.log("Atividade 10");

const usuario = "admin";
const senha = "1234";

let usuarioTentativa = prompt("Informe o Usuario: (Atividade 10)");
let senhaTentativa = prompt("Informe o Senha: (Atividade 10)");

if (usuario == usuarioTentativa && senha == senhaTentativa) {
  console.log("Logado com Sucesso");
} else {
  console.log("Acesso negado");
}
console.log("Fim Atividade 10");
