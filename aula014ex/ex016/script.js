function contar(){
    var ini = document.getElementById('tinicio')
    var fin = document.getElementById('tfim')
    var pas = document.getElementById('tpasso')
    var res = document.getElementById('resposta')

    if (ini.value.length == 0 || fin.value.length == 0 || pas.value.length == 0){
        res.innerHTML = 'Impossível contar'
    } else{
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fin.value)
        let p = Number(pas.value)
        if (p <= 0){
            window.alert('Passo 0 inválido, considerando passo 1')
            p = 1
        }
        if (i < f) {
            for(var c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`
            }        
        }else{
            for(var c = i; c >= f; c -= p) 
                res.innerHTML += `${c} \u{1f449}`
        }
        res.innerHTML += `\u{1f3c1}`
    }
}

