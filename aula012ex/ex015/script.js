function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')/*Aqui foi criado imagem diretamente no js com id='foto'*/
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'bebe_m.png')
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
        res.appendChild(img)
    }
}