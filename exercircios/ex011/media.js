function media(){
    let nome = prompt('Qual nome do aluno ?')
    let nota1 = Number(prompt(`Qual a primeira nota de ${nome} ?`))
    let nota2 = Number(prompt(`Além de ${nota1} qual foi a outra nota de ${nome}?`))
    let resultado = document.getElementById('resultado')
    let media = (nota1+nota2) / 2
    if(media < 7){
        resultado.innerHTML = `Calculando a média final de <mark>${nome}</mark><br>As notas obtidas foram <mark>${nota1} e ${nota2}</mark>.<br>A média final será <mark>${(nota1+nota2)/2}</mark>.<br>A mensagem que temos é: <strong style="color: red;">Estude um pouco mais!</strong>`
    }else{
        resultado.innerHTML = `Calculando a média final de <mark>${nome}</mark><br>As notas obtidas foram <mark>${nota1} e ${nota2}</mark>.<br>A média final será <mark>${(nota1+nota2)/2}</mark>.<br>A mensagem que temos é: <strong style="color: green;">Você passou!</strong>`
    }


}