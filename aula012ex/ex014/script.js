function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 14
    msg.innerHTML = `Agora são ${hora} horas.`//Aqui é 'msg.inner' pois foi pego o id=msg
    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = 'amanhecer.png'
        document.body.style.background = '#fce34d'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde
        img.src = 'tarde.png'
        document.body.style.background = '#88bbf5'
    } else {
        //Boa noite
        img.src = 'noite.png'
        document.body.style.background = '#071c1d'
    }
}