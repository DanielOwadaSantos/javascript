let valores = [8, 1, 7, 4, 2 ,9]

/*for(let posi = 0; posi < valores.length; posi++){
console.log(`A posição ${posi} tem o valor ${valores[posi]}`)
}*/

for(let posi in valores){
    console.log(`A posição ${posi} tem o valor ${valores[posi]}`)
}