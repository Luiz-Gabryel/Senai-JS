document.getElementById('formMenu').addEventListener('submit', function(e) {
    e.preventDefault();
    opcaomenu1();
});

function opcaomenu1() {
    const opcao = document.getElementById('opcaomenu').value;
    document.getElementById('opcao1').style.display = 'none';
    document.getElementById('opcao2').style.display = 'none';
    document.getElementById('opcao3').style.display = 'none';
    document.getElementById('opcao4').style.display = 'none';



function calcularNovoSalario() {
    const elemento = document.querySelector("#opcao1");
    elemento.innerHTML = "<p>Novo texto em HTML!</p>";
    const meuBotao = document.querySelector('#opcap1');
    meuBotao.style.display = "block";


}






/*    switch(opcao) {
        case '1':
            document.getElementById('opcao1').style.display = 'block';
            break;
        case '2':
            document.getElementById('opcao2').style.display = 'block';
            break;
        case '3':
            document.getElementById('opcao3').style.display = 'block';
            break;
        case '4':
            document.getElementById('opcao4').style.display = 'block';
            break;
        default:
            alert('nao ta valido');
    }
}
*/