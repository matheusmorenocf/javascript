function fatorial(){
    let n = Number(document.querySelector('input#txtn').value);
    let saida = document.getElementById('resultado');
    saida.innerHTML += `<h2>Calculando ${n}!</h2>`;

    let c = n;
    let fat = 1
    while(c>1){
        saida.innerHTML += `${c} x `
        fat *= c // Corresponde ao calculo de fatorial fat - fat * c
        c--
    };
    saida.innerHTML += `1 = <strong>${fat.toLocaleString('pt-BR')}</strong>`
};