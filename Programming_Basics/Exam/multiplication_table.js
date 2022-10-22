function multiply(input)
{

    let num = Number(input[0])
    let str_num = num.toString
    let num1 = Number(str_num[2])
    let num2 = Number(str_num[1])
    let num3 = Number(str_num[0])
    for (let i = 1; i < num1 + 1; i++)
    {
        for (let j = 1; j < num2 + 1; j++)
        {
            for (let k = 1; k < num3 + 1; k++)
            {
                console.log(`${i} * ${j} * ${k} = ${i * j * k}`)
            }
        }
    }
            
}

multiply(["1", "2", "3"])