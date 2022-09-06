function shopping(input)
{
    let budget = Number(input[0])
    let N = Number(input[1]);
    let M = Number(input[2]);
    let P = Number(input[3]);
    let N_price = 250 * N;
    let M_price = (N_price * 0.35) * M;
    let P_price = (N_price * 0.10) * P;
    let total_price = N_price + M_price + P_price;
    if (N > M)
    {
        total_price *= 0.85;
    }
    if (total_price > budget)
    {
        money_needed = total_price - budget;
        console.log(`Not enough money! You need ${money_needed.toFixed(2)} leva more!`);
    }
    else
    {
        money_left = budget - total_price;
        console.log(`You have ${money_left.toFixed(2)} leva left!`); 
    }

}
shopping(["900", "2", "1", "3"]);