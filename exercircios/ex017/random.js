function aleatorio(){
    let n = Math.floor(Math.random()*100+1)
    let resposta = document.getElementById('resultado')
    resposta.innerHTML += `<p>Acabei de pensar no número <mark>${n}</p></mark>`
}

function limpar(){
    document.getElementById('resultado').innerHTML = ''

}