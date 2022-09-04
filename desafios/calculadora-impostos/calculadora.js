function calcular(){
    let preco = Number(document.getElementById('txtpreco').value)
    let ipi = Number(document.getElementById('percipi').value)
    let icms = Number(document.getElementById('percicms').value)
    if(preco == 0 || icms == 0){
        alert('Valores insuficientes!')
    }else{
        document.getElementById('valorIpi').innerHTML = Number(preco * (ipi/100)).toFixed(2);
        document.getElementById('valorIcms').innerHTML = Number( preco * (icms/100)).toFixed(2);
        document.querySelector('output#piscoffins').innerHTML = Number(preco * (9.25/100)).toFixed(2);
        document.querySelector('output#bruto').innerHTML = Number(preco +  (preco * (ipi/100))).toFixed(2);
        document.getElementById('precoSicms').innerHTML = Number(preco - (preco * (icms/100))).toFixed(2);
        document.querySelector('output#liquido').innerHTML = Number(preco - (preco*(9.25/100)) - (preco * (icms/100))).toFixed(2);
    }
    

}