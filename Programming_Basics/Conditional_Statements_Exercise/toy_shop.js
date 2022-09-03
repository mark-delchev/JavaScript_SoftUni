function shop(input)
{
    let puzzle = 2.60;
    let doll = 3.00;
    let bear = 4.10;
    let minion = 8.20;
    let truck = 2.00;
    let trip = Number(input[0]);
    let puzzle_a = Number(input[1]);
    let doll_a = Number(input[2]);
    let bear_a = Number(input[3]);
    let minion_a = Number(input[4]);
    let truck_a = Number(input[5]);
    let orders = puzzle_a + doll_a + bear_a + minion_a + truck_a;
    let price = puzzle * puzzle_a + doll * doll_a + bear * bear_a + minion * minion_a + truck * truck_a;
    if (orders >= 50)
    {
        price *= 0.75;
    }
    let profit = price * 0.9;
    if (profit >= trip)
    {
        let final_price = profit - trip;
        console.log(`Yes! ${final_price.toFixed(2)} lv left.`);
    }
    else 
    {
        let final_price = trip - profit;
        console.log(`Not enough money! ${final_price.toFixed(2)} lv needed.`);
    }
}
shop(["320", "8", "2", "5", "5", "1"])