function parImpar(){
    let num = Number(prompt('Digite um número:'))
    resultado = document.querySelector('p#resultado')
    if (num%2 == 0){
        resultado.innerHTML = `O número ${num} que foi digitado é <strong>PAR!</strong> `
    } else{
        resultado.innerHTML = `O número ${num} que foi digitado é <strong>ÍMPAR!</strong> `
    }
}