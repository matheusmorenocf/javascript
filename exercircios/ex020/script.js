function calcular(){
    mesAtual = new Array ("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho","Julho", "Agosto","Setembro", "Outubro", "Novembro", "Dezembro")[new Date().getMonth()];
    mes = prompt(`Digite o mês em extenso (ex: ${mesAtual})`);
    switch(mes.toUpperCase()){//Como as strings se diferenciam quando sao maiusculas e minusculas e o usuario pode digitar Janeiro || janeiro utilizamos o metodo toUpperCase para transformar toda string em maiusculas.
        case 'JANEIRO': case 'FEVEREIRO': case 'MARÇO':
            estacao = 'VERÃO'
            break
        case 'ABRIL': case 'MAIO': case 'JUNHO':
            estacao = 'OUTONO'
            break
        case 'JULHO': case 'AGOSTO': case 'INVERNO':
            estacao = 'INVERNO'
            break
        case 'OUTUBRO': case 'NOVEMBRO': case 'DEZEMBRO':
            estacao = 'VERÃO'
            break
        default:
            alert('Digite um vês válido!')
            break
    }
    document.getElementById('resposta').innerHTML = `No mês de <mark>${mes}</mark>, estamos na estação <mark><strong>${estacao}</strong></mark>.`
}
