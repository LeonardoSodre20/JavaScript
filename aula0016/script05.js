function fatorial(number)
{
    if(number == 1)
    {
        return 1
    }
    else
    {
        return number * fatorial(number - 1)
    }

    //Recursividade
}

console.log(fatorial(5))

/*
    5! = 5*4*3*2*3*2*1
    5! = 5 * 4!


    n! = n * (n-1)!
    1! = 1
*/