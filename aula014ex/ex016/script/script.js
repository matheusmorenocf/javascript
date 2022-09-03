
function contar(){
    let inicio = window.document.getElementById('inicio')
    let fim = window.document.querySelector('input#fim')
    let passo = window.document.querySelector('input#passo')
    let contagem = window.document.querySelector('div#resp')
    
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        contagem.innerHTML = 'Impossivel contar!!'
    }else{
        contagem.innerHTML = 'Contando...<br>'
        let i = Number(inicio.value)
        let f = Number (fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if(i < f){
            //Contagem crescente
            for(let c = i;c<=f;c+=p){
                contagem.innerHTML +=`${c} &#x1F4A1`
            }
        }else{
            //Contagem regressiva
            for(let c = i;c>=f;c-=p){
                contagem.innerHTML +=`${c} &#x1F4A1`
            }
        }
        contagem.innerHTML += `&#x1F6A9`
    }
}