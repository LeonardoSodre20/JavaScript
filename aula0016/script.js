function par_imp(number)
{
    if(number%2==0)
    {
        return 'Par'
    }
    else
    {
        return 'Ímpar'
    }
}

let res = par_imp(10)//O Número 10 é o parâmetro da função.

console.log(`O número é : ${res}`)