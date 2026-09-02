// vetor - guardar valores
// posicão - índice -> [0]

//objeto - sao como "fichas" com informações
// cada informacao tem um nome (chave) e um valor

// pessoa - (nome, idade, email, genero, cpf)

/*
const pessoa = {
    nome: "Luiz Gabryel",
    idade: 17,
    email: "cythia3703@uorak.com",
    genero: "Masculino",
    cpf: "085.657.250-06"
}

for (const pessoaKey in pessoa) {
    console.log(pessoa[pessoaKey])

}

// console.log(pessoa.nome)
// console.log(pessoa["idade"])


// outra atividade
const aluno = {
    nome: "Luiz Gabryel",
    matricula: "20252026123",
    curso:"Ciencia de gatos",
    nota: 9.5
}

console.log("Dados do Aluno: \n")
for (const alunoKey in aluno) {
    const valor = aluno[alunoKey]
    console.log(`Chave: ${alunoKey} | Valor ${valor}`)
}


// outro
const carrinho = [
    {produto: "Camiseta", preco: 49.90, quantidade: 2},
    {produto: "Calca Jeans", preco: 129.90, quantidade: 4},
    {produto: "Tenis", preco: 299.90, quantidade: 5}
]

for (const carrinhoKey of carrinho) {
    console.log(carrinhoKey.produto)
    console.log(carrinhoKey.preco)

}
*/

/*
Desafio: Controle de pedidos de uma lanchonete 🍔

Crie um programa que represente os pedidos de uma lanchonete.

O programa deverá possuir pelo menos 4 itens, e cada item deve conter:

nome
preco
quantidade

Depois, o programa deverá:

Percorrer todos os itens utilizando for...of.
Calcular o valor total de cada item (preco × quantidade).
Exibir no console o nome do item, a quantidade e o valor total.
Calcular e exibir o valor total do pedido.
Ao final, informar qual item teve o maior valor total, considerando a quantidade comprada.



//erros
const pedidos = [
    {pedido: "Hamburguer", preco: 15.90, quantidade: 2},
    {pedido: "Batata Frita", preco: 10.50, quantidade: 3},
    {pedido: "Refrigerante", preco: 5.90, quantidade: 4},
    {pedido: "Sorvete", preco: 17.90, quantidade: 2}
]
let totalPagar = 0
let maiorValor = 0
for (const pedido of pedidos) {
    const valorTotalProduto = pedido.preco * pedido.quantidade
    totalPagar = pedido.preco + totalPagar
    resultado1 = (`Item: ${pedido.pedido}, Quantidade: ${pedido.quantidade}, Valor total R$${valorTotalProduto}`)
    console.log(resultado1)

    for (const pedido of pedidos) {
        const valorTotalProduto = pedido.preco * pedido.quantidade
        if (valorTotalProduto > maiorValor) {
            resultado = (`item com maior valor total é: ${pedido.pedido}, com valor total de R$${valorTotalProduto}`)
        }
    }}
console.log(resultado1)
console.log(resultado)

console.log(`seu total e: R$ ${totalPagar.toFixed(2)}`)


// atividade final
let pedido1 = prompt("Digite o nome do pedido 1: ");
let preco1;
do {
    preco1 = Number(prompt("Digite o preço do pedido 1: "));
    if (Number.isNaN(preco1) || preco1 <= 0) {
        alert("Preço nao valido. Digite um número maior que 0.");
    }
} while (Number.isNaN(preco1) || preco1 <= 0);
let quantidade1;
do {
    quantidade1 = Number(prompt("Digite a quantidade do pedido 1: "));
    if (Number.isNaN(quantidade1) || quantidade1 <= 0) {
        alert("Quantidade inválida. Digite um número inteiro maior que 0.");
    }
} while (Number.isNaN(quantidade1) || quantidade1 <= 0);

let pedido2 = prompt("Digite o nome do pedido 2: ");
let preco2;
do {
    preco2 = Number(prompt("Digite o preço do pedido 2: "));
    if (Number.isNaN(preco2) || preco2 <= 0) {
        alert("Preço nao valido. Digite um número maior que 0.");
    }
} while (Number.isNaN(preco2) || preco2 <= 0);
let quantidade2;
do {
    quantidade2 = Number(prompt("Digite a quantidade do pedido 2: "));
    if (Number.isNaN(quantidade2) || quantidade2 <= 0) {
        alert("Quantidade inválida. Digite um número inteiro maior que 0.");
    }
} while (Number.isNaN(quantidade2) || quantidade2 <= 0);

let pedido3 = prompt("Digite o nome do pedido 3: ");
let preco3;
do {
    preco3 = Number(prompt("Digite o preço do pedido 3: "));
    if (Number.isNaN(preco3) || preco3 <= 0) {
        alert("Preço nao valido. Digite um número maior que 0.");
    }
} while (Number.isNaN(preco3) || preco3 <= 0);
let quantidade3;
do {
    quantidade3 = Number(prompt("Digite a quantidade do pedido 3: "));
    if (Number.isNaN(quantidade3) || quantidade3 <= 0) {
        alert("Quantidade inválida. Digite um número inteiro maior que 0.");
    }
} while (Number.isNaN(quantidade3) || quantidade3 <= 0);

let pedido4 = prompt("Digite o nome do pedido 4: ");
let preco4;
do {
    preco4 = Number(prompt("Digite o preço do pedido 4: "));
    if (Number.isNaN(preco4) || preco4 <= 0) {
        alert("Preço nao valido. Digite um número maior que 0.");
    }
} while (Number.isNaN(preco4) || preco4 <= 0);
let quantidade4;
do {
    quantidade4 = Number(prompt("Digite a quantidade do pedido 4: "));
    if (Number.isNaN(quantidade4) || quantidade4 <= 0) {
        alert("Quantidade inválida. Digite um número inteiro maior que 0.");
    }
} while (Number.isNaN(quantidade4) || quantidade4 <= 0);

// if (
//     Number.isNaN(preco1) || Number.isNaN(preco2) || Number.isNaN(preco3) || Number.isNaN(preco4) ||
//     Number.isNaN(quantidade1) || Number.isNaN(quantidade2) || Number.isNaN(quantidade3) || Number.isNaN(quantidade4)
// ) {
//     console.log("Isso não são números, por favor tente digitar números.");
//     alert("Isso não são números, por favor tente digitar números.");
// }

const pedidos = [
    { pedido: pedido1, preco: preco1, quantidade: quantidade1 },
    { pedido: pedido2, preco: preco2, quantidade: quantidade2 },
    { pedido: pedido3, preco: preco3, quantidade: quantidade3 },
    { pedido: pedido4, preco: preco4, quantidade: quantidade4 }
];

let totalPagar = 0;
let maiorValor = 0;
let maiorTotal = "";

for (const pedido of pedidos) {
    const valorTotalProduto = pedido.preco * pedido.quantidade;
    totalPagar += valorTotalProduto;

    console.log(`Item: ${pedido.pedido}, Quantidade: ${pedido.quantidade}, Valor total R$${valorTotalProduto.toFixed(2)}`);

    if (valorTotalProduto > maiorValor) {
        maiorValor = valorTotalProduto;
        maiorTotal = `Item com maior valor total é: ${pedido.pedido}, com valor total de R$${valorTotalProduto.toFixed(2)}`;
    }
}

console.log(maiorTotal);
console.log(`Seu total é: R$ ${totalPagar.toFixed(2)}`);

//outro

//break -> para de percorrer a lista

const numeros = [ 5,12,8,2,16,19,25]

const procurado = 19
for (const num of numeros){
    console.log(num)
    if (num === procurado){
        console.log("achado")
        break
    }
}
console.log("Terminou")

//continue -> pular a etapa atual

console.log("numeros impas de 1 a 10")

for (let numero = 0; numero < 10; numero++) {
    if (numero % 2 ==0){
        continue
    }
    console.log(numero)

}


const nomes = ["Luiz", "Gabryel", "Cythia", "Gabriel", "Maria", "João"]
nomes.reverse()
console.log(nomes)


// outro
const alunos = [
    {nome: "Luiz", nota: 5},
    {nome: "Maria", nota: 8},
    {nome: "Erick", nota: 7},
    {nome: "Leo", nota: 9}]

for (const aluno of alunos) {
    if (aluno.nota >= 7) {
        console.log(`Aluno ${aluno.nome} aprovado com nota ${aluno.nota}`)

    } else {
        continue;
    }

}
*/

