function contar(){
    let inicio = Number(document.querySelector('input#txtini').value)
    let fim = Number(document.querySelector('input#txtn').value)
    document.querySelector('div#contagem').innerHTML = `<h2>Contando de ${inicio} até ${fim}</h2>`
    if (inicio < fim){
        for (let c = inicio;c<=fim;c++){
            document.querySelector('div#contagem').innerHTML += `${c} &#x1F449`
        }
    }else{
        for (let c = inicio;c>=fim;c--){
            document.querySelector('div#contagem').innerHTML += `${c} &#x1F449`
        }
    }
    document.querySelector('div#contagem').innerHTML += `&#x1F3C1`
}