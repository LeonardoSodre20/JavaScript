var n1 = Number.parseInt(window.prompt("Digite um Número: "))
var n2 = Number.parseInt(window.prompt("Digite outro Número"))

//Quando ulizamos o comando window.prompt , irá criar uma mensagem na tela do usuário , ou seja , esse comando retorna uma string então como queremos mostrar a soma entre n1 e n2 , devemos especificar que tipo de dados eles são . Então usamos o comando "Number.parseInt ou Number.parseFloat" , usamos o parseInt para número inteiros e o parseFloat para números decimais.

var soma = n1 + n2

window.alert("A soma dos valores é : " + soma)//O Operador + não serve só para concatenar.

//para Converter um número em string basta utilizar o comando toString() ou String("Mais o Número para converter")

var n3

Number.parseInt(window.prompt("Digite o Número para se converter : "))

window.alert(`A soma entre ${n1} e ${n2} é igual a ${soma}`)







