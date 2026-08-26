// Comentario
//Node.js
//Tipagem Fraca
// const = nao da pra mudar

const temperatura = Number(prompt("Qual a temperatura: "));
if (Number.isNaN(temperatura)) {
  console.log("temperatura Invalida");
}

const confirmar = prompt(
  "A temperatura e realmente: " + temperatura + "C" + " .Confirme usando (S)",
);

if (confirmar === "S") {
  if (temperatura < 0) {
    console.log("Muito frio");
  } else if (temperatura <= 15) {
    console.log("Frio");
  } else if (temperatura <= 25) {
    console.log("Agradável");
  } else if (temperatura <= 35) {
    console.log("Quente");
  } else {
    console.log("Muito quente");
  }
} else {
  console.log("Finalizado");
}

/*
const nota = 75;
if (nota >= 80) {
  console.log("Aprovado");
} else if (nota >= 60) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}
const usuario = prompt("Usuario:");
const senha = Number(prompt("Senha: "));

const acessoAdmin = usuario === "Aster" && senha === 1203;
const acessoUSer = usuario === "Luiz" && senha === 1234;

if (acessoAdmin || acessoUSer) {
  console.log("Acesso Liberado.");
} else {
  console.log("Acesso Negado.");
}
const usuario = "admin";
const senha = "1234";
const senhaCorreta = senha === "1234";
const ehAdmin = usuario === "admin";
const ehGerente = usuario === "gerente";
if ((ehAdmin && senhaCorreta) || (ehGerente && senhaCorreta)) {
  console.log("Acesso Liberado");
} else {
  console.log("Acesso Negado");
}
if ((ehAdmin || ehGerente) && senhaCorreta) {
  console.log("Acesso Liberado, via usuario");
} else {
  console.log("Acesso Negado, via usuario");
}
const temDinheiro = false;
const temCartao = true;
const temPix = false;
if (temDinheiro || temCartao || temPix) {
    console.log("Pode Pagar")
} else {
}
const idade = 20;
const temDocumento = true;
const estaLista = true;
if (idade >= 18 && temDocumento && estaLista) {
  console.log("Pode entrar");
} else {
  console.log("Acesso negado");
}
const idade = Number(prompt("Digite sua idade:"));
if (idade >= 18) {
  alert("Voce e maior de idade");
  const carteira = prompt("Voce tem carteira");
  if (carteira == "sim") {
    alert("Legal");
  } else {
    alert("Voce deve tirar a carteira");
  }
} else {
  alert("Voce e menor de idade");
}
const nome = "Luiz Gabryel";
const chovendo = true;
const solApareceu = false;
console.log(typeof chovendo);
let n1 = Number(prompt("qual numero 1"));
let n2 = Number(prompt("qual numero 2"));
let soma = n1 + n2;
console.log(soma);
alert("Resultado: " + soma);
let h1 = document.getElementById("resultado");
let nu1 = document.getElementById("numero1");
let nu2 = document.getElementById("numero2");
nu1.innerText = "Primeiro numero: " + n1;
nu2.innerText = "Segundo numero: " + n2;
h1.innerText = "Resultado: " + soma;
const idade = 17;
if (idade >= 18) {
  console.log("Maior idade");
} else {
  console.log("Menor idade");
}
*/
