function contar(){
    let fim = Number(document.querySelector('input#txtn').value)
    document.querySelector('div#contagem').innerHTML = `<h2>Contando de 0 até ${fim}</h2>`
    for (let c = 0;c<=fim;c++){
        document.querySelector('div#contagem').innerHTML += `${c} &#x1F449`
    }
    document.querySelector('div#contagem').innerHTML += `&#x1F3C1`
}