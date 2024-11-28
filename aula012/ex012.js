var hora = new Date()
var hora_agora = hora.getHours()
console.log(`Agora são exatamente ${hora_agora} horas.`)
if (hora_agora < 12){
    console.log('Bom dia')
}
else if (hora_agora < 18){
    console.log('Boa tarde')
}
else{
    console.log('Boa noite')
}
