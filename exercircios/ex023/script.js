function contar(){
    document.getElementById('resposta').innerHTML = `<h2>Números pares de 1 até 10</h2>`
    for(var c =1;c<=10;c++){
            if (c%2==0){
                document.getElementById('resposta').innerHTML += `${c} &#x1F449` 
            }
        }
    document.getElementById('resposta').innerHTML += `&#x1F3C1`
}
    

