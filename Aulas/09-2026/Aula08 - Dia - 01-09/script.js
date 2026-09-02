/*
* //array
// teoria array e um tipo de dado que serve para amarzenar valor sequencialmente em forma de lista
//voce acessa o primeiro pelo indice [0] e o ultimo pelo indice [array.length - 1]
const numeros = [1, 2, 3, 4, 5];

const nomes = ["João", "Maria", "José", "Ana"];

console.log(numeros[2])
console.log(nomes[3])


//length é uma propriedade que retorna o tamanho do array
console.log(numeros.length)
console.log(nomes.length)

for ( let i = 0; i < nomes.length; i++) {
    console.log(nomes[i])
}

const frutas = ["maçã", "banana", "laranja", "uva", "abacaxi", "erick"];
for (const fruta of frutas) {
    console.log(fruta)

}
const listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let soma = 0;

    for (const listaNumero of listaNumeros) {
        soma += listaNumero;
    }
        console.log(`numeros: ${listaNumeros}`)
console.log(`soma: ${soma}`)*/


const notas = [ 7.5, 9.0, 8.5, 6.0, 10.0];
let maiorNota = notas[0];
for (const nota of notas) {
    if (nota > maiorNota) {
        maiorNota = nota;
    }
}
console.log(`A maior nota é: ${maiorNota}`)

