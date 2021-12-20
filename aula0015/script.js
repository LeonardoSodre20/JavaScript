let num = [5,8,4]
//let é usado mais para vetores

num[3] = 10
num.push(7)
num.push(1)
num.push(25)
num.sort()//Coloque o comando deixar de ordem crescente no final dos comandos do vetor


for(let pos=0; pos < num.length; pos++)//a variavel pos vai receber os índices do vetor , ou seja , se pos for menor que a quantidade de elementos contidos do vetor , ele vai executador o laço de repetição 'FOR'.
{
    console.log(`Elementos ${pos} do Vetor: ${num[pos]}`)
}



let position = num.indexOf(8)

console.log('-------#####-------')

if(position == -1)
{
    console.log('A Posição desse Número não foi encontrada!')
}
else
{
    console.log(`A Posição do valor 8 é : ${position}`)
}

console.log('-------#####-------')
console.log(`Quantidade de Elementos contidos no Vetor: ${num.length}`)



