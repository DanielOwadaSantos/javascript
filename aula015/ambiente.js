let num = [1, 2, 3]

console.log  (`Nossos vetores são ${num}`)
console.log(num)
num[3] = 4
console.log(num)
num.push(5)
console.log(num)

let num1 = [3, 2, 1]
num1.sort()// sort é um método interno que faz com que as posições dos vetores fiquem em ordem// 
console.log(num1)
console.log(`O vetor tem ${num1.length} posições.`)
console.log(`A 1ª posição do vetor é ${num1[0]}.`)

for(let posi=0; posi<num1.length; posi++){
    console.log(num[posi])
}

let posi1 = num1.indexOf(3)
if (posi1 == -1){
    console.log('O valor não foi encontrado.')
}else{
    console.log(`O valor 3 está na posição ${posi1}`)
}
