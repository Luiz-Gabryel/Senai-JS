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
console.log("Atividade 9");

let valorCompra = Number(
  prompt("Digite o valor total da compra: (Atividade 9)"),
);

if (valorCompra > 100) {
  let valorComDesconto = valorCompra * 0.1;
  alert(
    "Você ganhou 10% de desconto! Valor final: R$ " +
      valorComDesconto.toFixed(2),
  );
} else {
  alert(
    "Sua compra não atingiu o valor minimo. Valor final: R$ " +
      valorCompra.toFixed(2),
  );
}
console.log("Fim Atividade 9");

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

//11 Classificação de triângulos
console.log("Atividade 11");

const lado1 = Number(prompt("Digite o primeiro lado"))
const lado2 = Number(prompt("Digite o segundo lado"))
const lado3 = Number(prompt("Digite o terceiro lado"))

if((lado1+lado2) < lado3 ){
    alert("nao e um triangulo")
}else if(lado1==lado2 && lado2==lado3 && lado1==lado3){
    alert("triangulo equilatero")
}else if(lado1==lado2 || lado2==lado3 || lado1==lado3){
    alert("triangulo isosceles")
}else{
    alert("traingulo escaleno")
}

console.log("Fim Atividade 11");

//12 Conversão de notas (Conceitos)

console.log("Atividade 13");

let nota2 = Number(prompt("Digite sua nota: (Atividade 12)"));
if (nota2 < 60) {
  console.log("F");
} else if (nota2 >= 60 && nota2 <= 69) {
  console.log("D");
} else if (nota2 >= 70 && nota2 <= 79) {
  console.log("C");
} else if (nota2 >= 80 && nota2 <= 89) {
  console.log("B");
} else {
  console.log("A");
}

console.log("Fim Atividade 13");

//14 Cálculo de IMC
console.log("Atividade 14");

let peso = Number(prompt("Qual o seu peso:"));
let altura = Number(prompt("Qual sua altura:"));
let altura2 = altura ** 2;
let imc = peso / altura2;

console.log("Seu IMC é: " + imc.toFixed(2));

if (imc < 18.5) {
  console.log("Abaixo do peso");
} else if (imc >= 18.5 && imc < 25) {
  console.log("Peso normal");
} else if (imc >= 25 && imc < 30) {
  console.log("Sobrepeso");
} else {
  console.log("Obesidade");
}

console.log("Fim Atividade 14");

//15. Ano Bissexto
let ano = Number(prompt("Me diga uma data: (Atividade 15)"));
let bissexto = (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;

if (bissexto) {
  console.log("É bissexto");
} else {
  console.log("Não é bissexto");
}

