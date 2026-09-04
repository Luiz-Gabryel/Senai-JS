const elemento = document.getElementById('filme-principal')
console.log(elemento)
console.log(elemento.tagName)

function selecionarPorId() {
    const tituloFilme = document.getElementById('titulo-filme')
    console.log(tituloFilme)
    console.log(tituloFilme.tagName)
    console.log(tituloFilme.textContent)
    console.log(tituloFilme.id)
    tituloFilme.classList.add('elemento-selecionado')
}

function selecionarPorClasse() {
    const elementos = document.getElementsByClassName('genero-acao')
    console.log(`Quantidade de elementos: ${elementos.length}`)
    for (let i = 0; i < elementos.length; i++) {
        console.log(elementos[i].textContent.trim())
        elementos[i].classList.add('elemento-selecionado')


    }
}

function selecionarPorQuery() {
    const elemento = document.querySelector('.filme-mini')
    console.log(elemento)
    elemento.classList.add('elemento-selecionado')

}

function selecionarTodos() {
    const elementos = document.querySelectorAll('.filme-mini')
    elementos.forEach((el, indice) => {
            console.log(indice, el.textContent.trim())
            el.classList.add('elemento-selecionado')
        }
    )
}

function mudarTexto() {
    const titulo = document.getElementById('titulo-destaque')
    titulo.textContent = document.getElementById('input-busca').value
    console.log(`Novo Teste`, titulo.textContent)
    titulo.classList.add('texto-animado')
    setTimeout(() => {
        titulo.classList.remove('texto-animado')
    }, 300)

}

function adicionarBadge() {
    const badge = document.createElement('span')
    badge.className = 'badge'
    badge.textContent = '✨ Em Alta'

    const container = document.getElementById('badge-container')
    container.innerHTML = ''
    container.appendChild(badge)

}

function mudarPoster() {
    const poster = document.getElementById('poster-destaque')
    const titulo = document.getElementById("titulo-destaque")

    const opcoes = [
        {
            url: 'https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg',
            nome: 'The Last of Us'
        },
        {
            url: 'https://image.tmdb.org/t/p/w500/qZtAf4Z1lazGQoYVXiHOrvLr5lI.jpg',
            nome: 'Wednesday'
        },
        {
            url: 'https://image.tmdb.org/t/p/w500/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg',
            nome: 'Breaking Bad'
        },
        {
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKt0u_oiRYUZGdbOU0xlbRLc2DS1tHD49IkSaaDHuKj18qZT0Y',
            nome: 'Todo Mundo em Pânico'
        },
        {
            url: 'https://cdn.egamersworld.com/cdn-cgi/image/width=690,quality=75,format=webp/uploads/blog/1/17/1735564816859_1735564816859.webp',
            nome: 'League of Legends'
        }
    ];

    const sorteado = opcoes[Math.floor(Math.random() * opcoes.length)]
    poster.src = sorteado.url
    poster.alt = sorteado.nome
    titulo.textContent = sorteado.nome
    console.log(`Poster trocado para: ${sorteado.nome}`)
    poster.style.opacity = '0'
    poster.style.transition = 'opacity 0.3s'
    setTimeout(
        () => {
            poster.style.opacity = '1'
            poster.classList.add('poster-fade-in')
            setTimeout(() => {
                poster.classList.remove('poster-fade-in')
            }, 300)
        }, 300
    )
}

function lerInput(){
    const input = document.getElementById('input-busca').value
    if (input === ''){
        alert('Campo de busca vazio!')
        return
    }
    console.log(`Valor do input: ${input.value}`)
    const titulo = document.getElementById('titulo-destaque')
    titulo.textContent = input
    titulo.classList.add('texto-animado')

}