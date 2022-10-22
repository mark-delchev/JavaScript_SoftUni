function kit(input)
{
    let tshirt_price = Number(input[0]);
    let price_for_ball = Number(input[1]);
    let shorts_price = tshirt_price * 0.75;
    let socks_price = shorts_price * 0.20;
    let shoes_price = (shorts_price + tshirt_price) * 2
    let price = tshirt_price + shoes_price + socks_price + shorts_price;
    let final_price = price * 0.85
    if (final_price >= price_for_ball)
    {
        console.log("Yes, he will earn the world-cup replica ball!")
        console.log(`His sum is ${final_price.toFixed(2)} lv.`)
    }
    else
    {
        console.log("No, he will not earn the world-cup replica ball.")
        console.log(`He needs ${(price_for_ball - final_price).toFixed(2)} lv. more.`)
    }
}
kit(["55", "310"])