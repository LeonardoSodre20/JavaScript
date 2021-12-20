let valores = [7,1,2,3,4,5,10,25,20]

/*
for(var pos = 0; pos < valores.length; pos++)
{
    console.log(`Posição no Vetor: ${pos} Valor : ${valores[pos]}`)

}
*/


for(let pos in valores)//Para cada posição contida EM valores , ele vai receber o elemento do vetor
{
    console.log(`Posição do Vetor ${pos} Valor do Vetor: ${valores[pos]}`)
}


