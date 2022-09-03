function calcIdade(){
    anoNasc = Number(prompt('Em que ano voccê nasceu?'))
    ano = new Date().getFullYear()   
    if (anoNasc > ano){
        alert('Digite um ano valido!')
    } else{
        document.getElementById('resultado').innerHTML = `Quem nasceu em ${anoNasc} vai completar ${ano-anoNasc} em ${ano}`
    }
}