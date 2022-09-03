function dataAgora(){
    let data = new Date()
    let resultado = document.querySelector('p#resultado')
    resultado.innerHTML = `O que eu recebi do sistema foi <mark>${data}</mark>`
}