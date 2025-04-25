let num = document.querySelector('input#tnumero')
let list = document.querySelector('select#flista')
let resu = document.querySelector('div#resultado')
let valores = []

function enumero(n){
    if(Number(n) >=1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
function nalista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}


function adicionar(){
    if(enumero(num.value) && !nalista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        list.appendChild(item)
        resu.innerHTML = ''
    }else{
        window.alert('Erro! Valor inválido ou encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores a sua lista.')
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if( valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / total
        resu.innerHTML = ''
        resu.innerHTML += `<p>Ao todo temos ${total} números cadastrados.</p>`
        resu.innerHTML += `<p>O maior valor encontrado foi ${maior}.</p>`
        resu.innerHTML += `<p>O menor valor encontrado foi ${menor}.</p>`
        resu.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
        resu.innerHTML += `<p>A média de todos os valores é ${media}.</p>`
    }
}