// 5!= 5 * 4 * 3 * 2 * 1 = 120


function fatorial(x)
{
    let fat = 1

    for(let c = x; c > 1; c--)
    {
        fat *= c
    }

    return fat
}

console.log(fatorial(5))
