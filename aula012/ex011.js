var país = 'eua'
if (país == 'Brasil'){
    console.log('Você é brasileiro.')   
}
else{
    console.log('Você é estangeiro.')
}

var idade = 17
if (idade > 18){
    console.log('Você é maior de idade.')
}
else{
    console.log('Você é menor de idade.')
}

var idade = 88
console.log(`Você tem ${idade} anos.`)
    if (idade < 16){
    console.log('Você não pode votar.')
} 
else if(/*idade >= 16 &&*/ idade < 18 || idade > 65){
    console.log('Voto opcional.')
}
else{
    console.log('Voto obrigatório.')
}

