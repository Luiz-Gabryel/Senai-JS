/*
// 1. Contagem de 1 a 10 (Nível Básico)

//for -> loop
// let conta = 0; variavel de controle
// conta <= 10; analiza a condicao
// conta++; oq vai acontecer com a variavel de controle

for (let conta = 0; conta <= 10; conta++) {
  console.log(conta);
}
console.log("cabo a graca");


// 2. Tabuada de um número (Nível Básico)


let numero = Number(prompt("Qual tabuada: "));
if (Number.isNaN(numero)) {
  console.log("Isso nao e um numero");
} else {
  console.log(`\n TABUADA do ${numero} \n`);
}
let resultado;

for (let i = 1; i <= 10; i++) {
  setTimeout(() => {
    resultado = numero * i;
    console.log(`${numero} X ${i} = ${resultado}`);
  }, i * 2000);
}


// 3. Soma dos primeiros N números (Nível Básico)


let n = Number(prompt("Digite um número inteiro positivo:"));

let soma = 0;

for (let i = 1; i <= n; i++) {
    soma += i;
}

console.log(`A soma dos numeros de 1 ate ${n} e ${soma}.`);


// 4. Números pares de 1 a 50 (Nível Intermediário)

console.log("Numeros pares de 0 a 20: \n");

for (let pares = 0; pares <= 20; pares += 2) {
  let proximo = pares + 2;

  if (proximo <= 20) {
    console.log(`\nNumero e ${pares} e o proximo e ${proximo}`);
  } else {
    console.log(`\nNumero e ${pares}`);
  }
}


//5. Jogo de adivinhação (Nível Intermediário)


console.log("Adivinhe um numero entre 1 e 10");
alert("Adivinhe um numero entre 1 e 10");
let max = 50;
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



//6. Contagem regressiva (Nível Intermediário)


console.log("Lancamento em: \n");
for (let conta = 10; conta >= 0; conta--) {
  setTimeout(() => {}, 2000);

  console.log(conta);
  if (conta == 0) {
    console.log("Lancou");
  }
}


//7. Soma dos dígitos (Nível Avançado)

let numero = 534
let numero = prompt("Digite numeros: ");
let soma = 0;

for (let i = 0; i < numero.length; i++) {
  soma += Number(numero[i]);
}

console.log(soma);



//8. Fatorial (Nível Avançado)


// let numero = 5
let numero = Number(prompt("Digite um numero:"));
let fatorial = 1;

for (let i = numero; i > 1; i--) {
  fatorial *= i;
}

console.log("O fatorial e : " + fatorial);



//9. Inverter número (Nível Avançado)


const numeros = [1, 2, 3, 4, 5];
numeros.push(Number(prompt("Ajuda")));
numeros.reverse();
console.log(numeros);

//Esta com bugs


//10. Números perfeitos até 1000 (Nível Avançado)



const numerosPerfeitos = encontrarNumerosPerfeitos();
console.log('Números perfeitos até 1000:', numerosPerfeitos);


// EXERCÍCIO EXTRA - Metade de uma piramede

for (let numero = 1; numero <= 3; numero++) {
  let linha = "";
  for (let numero_dentro = 1; numero_dentro <= 3; numero_dentro++) {
    linha += numero + " ";
  }
  console.log(linha);
}



// EXERCÍCIO EXTRA - Gerador de Pirâmide

// saida esperada
// 111
// 222

function gerarPiramede(tamanho) {
    for (let numero = 1; numero <= tamanho; numero++) {
  let linha = " ";
  for (let numero_dentro = 1; numero_dentro <= numero; numero_dentro++) {
    linha += "*";
  }
  console.log(linha);
}
}
gerarPiramede(5);


*/
console.log("Fim do script");