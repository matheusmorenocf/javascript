function calcular(){
    let n1 = Number(prompt('Primeiro valor:'))
    let n2 = Number(prompt('Segundo valor:'))
    let operacao = prompt(`Valores informados: ${n1} e ${n2}
O que vamos fazer?
[1]Somar
[2]Subtrair
[3]Multiplicar
[4]Dividir`)
    resultado = document.getElementById('resultado')
    switch(operacao){
        case '1':
            resultado.innerHTML = `${n1} + ${n2} = ${n1+n2}`
            break;
        case '2':
            resultado.innerHTML = `${n1} - ${n2} = ${n1-n2}`
            break;
        case '3':
            resultado.innerHTML = `${n1} * ${n2} = ${n1*n2}`
            break;
        case '4':
            resultado.innerHTML = `${n1} / ${n2} = ${n1/n2}`
            break;
        default:
            resultado.innerHTML = `OPÇÃO INVÁLIDA! Você digitou ${n1} e ${n2}, mas não sei o que fazer com eles.`

            
    }
}
