
function contar(){
    
    var inicio = window.document.getElementById('inicio')
    var final = window.document.getElementById('fim')
    var passo = window.document.getElementById('passo')
    var res = window.document.getElementById('rest')

    if(inicio.value.length == 0 || final.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Preencha todos os campos!')
    } else {
        res.innerHTML = "Contando..."

        var ini = Number(inicio.value)
        var fim = Number(final.value)
        var pas = Number(passo.value)


        for(let i = ini ; i <= fim ; i += pas){

            res.innerHTML += `${i}, \u{1F449}`
        }
        res.innerHTML += `\u{1F3C1}`
    }
}