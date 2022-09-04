function kong(input)
{
    let budget = Number(input[0]);
    let actors = Number(input[1]);
    let costume_price = Number(input[2]);
    let decor = budget * 0.10;
    let actors_price = actors * costume_price
    if (actors > 150)
    {
        actors_price *= 0.90;
    }
    let expenses = actors_price + decor;
    if (expenses > budget)
    {
        let money_needed = expenses - budget;
        console.log("Not enough money!");
        console.log(`Wingard needs ${money_needed.toFixed(2)} leva more.`);
    }
    else
    {
        let money_left = budget - expenses;
        console.log("Action!");
        console.log(`Wingard starts filming with ${money_left.toFixed(2)} leva left.`);
    }
}
kong(["15437.62", "186", "57.99"])