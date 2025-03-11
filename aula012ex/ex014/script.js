function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var dara = new Date()
    var hora = data.getHours()
    //var hora = 14
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = 'amanhecer.png'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde
        img.src = 'tarde.png'
    } else {
        //Boa noite
        img.src = 'noite.png'
    }
}