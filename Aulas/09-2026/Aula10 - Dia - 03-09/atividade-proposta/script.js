console.log("Menu de opções:");
let aumento = 0
let novoSalario = 0
switch (prompt("Escolha uma opção: \n1 - Novo salário \n2 - Férias \n3 - Décimo terceiro \n4 - Sair"))
{
    case "1":
        opcao1();
        break;


    case "2":
        opcao2();
        break;


    case "3":
        opcao3();
        break;


    case "4":
        alert("Obrigado por usar nosso app")
        break;
}

function opcao1() {
    let salario = Number(prompt("Digite o salário:"));
    if (salario <= 350) {
        aumento = salario * 0.15;
        novoSalario = salario + aumento;
        let mensagem = ("O novo salário é: " + novoSalario.toFixed(2));
    }else if(salario >= 351 || salario <= 600 ){
        aumento = salario * 0.10;
        novoSalario = salario + aumento;
        let mensagem = ("O novo salário é: " + novoSalario.toFixed(2));
    } else(salario >=600)
        aumento = salario * 0.05;
        novoSalario = salario + aumento;
        let mensagem = ("O novo salário é: " + novoSalario.toFixed(2));
    alert(mensagem)

}

function opcao2(){
    let salario2 = Number(prompt("Digite o salário:"));
    let férias = salario2 + ( salario2 / 2);
    alert("O valor das férias é: " + férias.toFixed(2));
}

function opcao3(){
    let salario3 = Number(prompt("Digite o salário:"));
    let mesesTrabalhados = Number(prompt("Quantos meses foram trabalhados: "))
    let decimoTerceiro = (salario3 * mesesTrabalhados) / 12 ;
    alert("O valor do décimo terceiro é: " + decimoTerceiro.toFixed(2));
}

function opcao4(){
    alert("Voce saiu do sistema")
}