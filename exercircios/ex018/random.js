function aleatorio(){
    let na = Math.floor(Math.random()*100+1)
    let n = Number(prompt('Qual é o seu palpite?'))
    let resposta = document.getElementById('resultado')
    if (na == n){
        resposta.innerHTML += `<p>Você falou ${n}. Meu número é ${na}, você <strong>ACERTOU!</strong></p>`
    } else if (na > n){
        resposta.innerHTML += `<p>Você falou ${n}. Meu número é <strong>MAIOR!</strong></p>`
    } else{
        resposta.innerHTML += `<p>Você falou ${n}. Meu número é <strong>MENOR!</strong></p>`
    }

}
