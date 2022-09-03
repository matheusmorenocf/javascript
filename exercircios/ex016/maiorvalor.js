function maiorValor(){
    let num = Number(prompt('Digite um número:'))
    let num2 = Number(prompt('Digite outro número'))
    resultado = document.querySelector('p#resultado')
    if (num == num2){
        resultado.innerHTML = `Analisando os valores <mark>${num}</mark> e <mark>${num2}</mark>, ambos são <strong>IGUAIS</strong>`
    } else if(num > num2){
        resultado.innerHTML = `Analisando os valores <mark>${num}</mark> e <mark>${num2}</mark>, o maior valor é <strong>${num}</strong>`
    } else{
        resultado.innerHTML = `Analisando os valores <mark>${num}</mark> e <mark>${num2}</mark>, o maior valor é <strong>${num2}</strong>`
    }
}