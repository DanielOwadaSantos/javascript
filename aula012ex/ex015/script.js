function verificar(){
    var data = new Date()/*Aqui foi craida uma variavel para se colocar a nova data*/
    var ano = data.getFullYear()/*Aqui vai ser pego o ano atual para se colocar conta ou verificação*/
    var fano = document.getElementById('txtano')/*Aqui vai ser colocado o ano desejado na box*/
    var res = document.querySelector('div#res')/*Aqui será descrito o resultado da conta dos anos e o sexo*/
    if (fano.value.length == 0 || Number(fano.value) > ano){/*Aqui foi verificado se a caixa esta vazia ou
        se o ano digitado na box foi maior que o ano atual que se for o caso dará erro*/
        window.alert('[ERRO] Verifique os dados novamente')
    }else{
        var fsex = document.getElementsByName('radsex')/*Aqui será checado aonde estará a bolinha da pesquisa*/
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')/*Aqui foi a criada a imagem  diretamente no js, sem id*/
        img.setAttribute('id', 'foto')/*Aqui foi criado o id='foto' para a imagem*/
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'bebe_m.png')/*Estes comandos servem para colocar on arquivo da imagem 
                no programa e poder carrega-lo depois com append.child*/
            } else if (idade < 21){
                img.setAttribute('src', 'jovem_m.png')
            } else if (idade <= 50){
                img.setAttribute('src', 'adulto_m.png')
            } else {
                img.setAttribute('src', 'veio_m.png')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'bebe_f.png')
            } else if (idade < 21){
                img.setAttribute('src', 'jovem_f.png')
            } else if (idade <= 50){
                img.setAttribute('src', 'adulto_f.png')
            } else {
                img.setAttribute('src', 'veia_f.png')
            }
        }    
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)/*Aqui será mostrado a imagem apos o resultado do ano e genero escolhido*/
    }
}