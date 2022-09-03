function calcular(){
    let preco = Number(document.getElementById('precoB').value)
    let ipi = Number(document.getElementById('percIpi').value)
    let icms = Number(document.getElementById('percIcms').value)
    if(preco == 0 || icms == 0){
        alert('Valores insuficientes!')
    }else{
        document.getElementById('valorIpi').innerHTML = preco * (ipi/100);
        document.getElementById('valorIcms').innerHTML = preco * (icms/100);
        document.querySelector('output#piscoff').innerHTML = preco * (9.25/100);
        document.querySelector('output#precoBruto').innerHTML = preco +  (preco * (ipi/100));
        document.getElementById('precoSicms').innerHTML = preco - (preco * (icms/100))
        document.querySelector('output#precoLiquido').innerHTML = preco - (preco*(9.25/100));
    }
    

}