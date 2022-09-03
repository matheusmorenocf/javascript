function dataAgora(){
    let data = new Date()
    let dia = data.getDay()
    let dat = data.getDate()
    let mes = new Array ("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho","Julho", "Agosto","Setembro", "Outubro", "Novembro", "Dezembro")[data.getMonth()]
    let ano = data.getFullYear()
    let hora = data.getHours()
    let min = data.getMinutes()
    let seg = data.getSeconds()
    let resultado = document.querySelector('p#resultado')
    switch (dia){
        case 0:
            dia = 'Domingo'
            break
        case 1:
            dia = 'Segunda-feira'
            break
        case 2:
            dia = 'Terça-feira'
            break
        case 3:
            dia = 'Quarta-feira'
            break
        case 4:
            dia = 'Quinta-feira'
            break
        case 5:
            dia = 'Sexta-feira'
            break
        case 6:
            dia = 'Sábado'
            break
    }


    resultado.innerHTML =   `Dia: <mark>${dat}</mark><br>Mês: <mark>${mes}</mark><br>Ano: <mark>${ano}</mark><br>Dia da semana: <mark>${dia}</mark><br>Hora: <mark>${hora}</mark><br>Minutos: <mark>${min}</mark><br>Segundos: <mark>${seg}</mark>`
}

function time(){
    hoje = new Date();
    h = hoje.getHours();
    m = hoje.getMinutes();
    s= hoje.getSeconds();
    document.getElementById('hora').innerHTML = h+":"+m+":"+s;
    setTimeout('time()',500);
}