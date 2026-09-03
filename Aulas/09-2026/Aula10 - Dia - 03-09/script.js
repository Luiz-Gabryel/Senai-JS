const elemento = document.getElementById('filme-principal')
console.log(elemento)
console.log(elemento.tagName)

function selecionarPorId(){
    const tituloFilme = document.getElementById('titulo-filme')
    console.log(tituloFilme)
    console.log(tituloFilme.tagName)
    console.log(tituloFilme.textContent)
    console.log(tituloFilme.id)
    tituloFilme.classList.add('elemento-selecionado')
}

