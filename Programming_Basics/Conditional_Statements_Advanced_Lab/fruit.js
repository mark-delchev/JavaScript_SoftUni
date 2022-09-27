function food(input)
{
    let food = input[0];
    const vegetables = ["tomato", "cucumber", "pepper", "carrot"];
    const fruits = ["banana", "apple", "kiwi", "cherry", "lemon", "grapes"];

    if (vegetables.includes(food) == true)
    {
        console.log("vegetable")
    }
    else if (fruits.includes(food) == true)
    {
        console.log("fruit")
    }
    else
    {
        console.log("unknown")
    }
}