function equipment(input)
{
    basketball_fee = Number(input[0]);
    shoes = basketball_fee * 0.60;
    jersey = shoes * 0.80;
    ball = jersey * 0.25;
    accesories = ball * 0.20;
    final_price = basketball_fee + shoes + jersey + ball + accesories;
    console.log(final_price);
}
equipment(["365"])