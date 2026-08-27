// while cria loops que executam zero ou mais vezes

// let i = 0;
// while (true) {
//   console.log("Infinitu mais " + i);
//   i = i + 1;
// }

/*
let contador = 1;
let valor = Number(prompt("Até qual número: "));

while (contador <= valor) {
  console.log("repetiu " + contador);
  contador++;
  alert("tempo: " + contador);
}

let tempo = 10;
while (tempo > 0) {
  console.log(tempo);
  tempo--;
}
let numero = Number(prompt("teste"));

const senhaCorreta = "148SuperSenha";
let tentativasRestantes = 5;
let login = false;

while (tentativasRestantes > 0) {
  let tentativa = prompt(
    `Digite sua senha (Tentativas restantes: ${tentativasRestantes}):`,
  );

  if (tentativa === senhaCorreta) {
    console.log("Senha ta serto");
    login = true;

    break;
  } else {
    console.log("Senha ta errada");
    tentativasRestantes--;
  }
}

if (tentativasRestantes === 0) {
  console.log("Você acabou com tentativa");
}

if (login == true) {
  alert("Seja Bem vindo");
}


let inicio = Number(prompt("Digite o número inicial:"));
let fim = Number(prompt("Digite o número final:"));

let contador = inicio;

while (contador <= fim) {
  console.log(`Número: ${contador}`);
  contador++;
}

let soma = 0;
  let numero = 0;

  while (soma <= 100){  
     numero = Number(prompt("Informe um numero"))
     soma = soma + numero 
} 
console.log("A soma dos numeros chego em: " + soma)


let repetir = false;

do {
  console.log("So uma vez");
  console.log(4 + 4);
} while (repetir);
// do - while executa pelo menos uma vez

 */

// do - while executa pelo menos uma vez
console.log("Adivinhe um numero entre 1 e 10");
alert("Adivinhe um numero entre 1 e 10");
let max = Number(
  prompt("Qual numero max voce quer? (comeca com 1 e vai ate o max)"),
);
const numeroSecreto = Math.floor(Math.random() * max) + 1;
console.log(numeroSecreto);
let palpite;
let tentativas = 0;

do {
  tentativas++;
  palpite = Number(prompt("Qual seu palpite: "));

  if (Number.isNaN(palpite)) {
    console.log("Digite um numero valido");
    alert("Digite um numero valido");
  } else if (palpite == numeroSecreto) {
    console.log("Uai voce acertou");
    alert("Uai voce acertou");
    console.log("voce acertou com " + tentativas + " tentativas");
    alert("voce acertou com " + tentativas + " tentativas");
  } else if (palpite < numeroSecreto) {
    console.log("o numero e maior");
    alert("o numero e maior");
  } else if (palpite > numeroSecreto) {
    console.log("o numero e menor");
    alert("o numero e menor");
  }
} while (palpite != numeroSecreto);
