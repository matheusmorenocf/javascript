function taBuada(){
    let n = Number(document.querySelector('input#txtn').value);
    document.getElementById('tabuada').innerHTML = `<h2>Tabuada de ${n}</h2>`;
    for (let c=1 ;c<=10;c++){
        document.getElementById('tabuada').innerHTML += `<p>${n} x ${c} = <strong>${n*c}</strong></p>`
    };
};