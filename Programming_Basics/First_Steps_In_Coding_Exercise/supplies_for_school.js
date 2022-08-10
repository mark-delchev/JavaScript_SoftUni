function supplies(input)
{
    let pen_num = Number(input[0]);
    let markers_num = Number(input[1]);
    let detergent_liters = Number(input[2]);
    let discount = Number(input[3]) / 100;
    let pens = 5.8;
    let markers = 7.2;
    let detergent = 1.2;
    let price = (pens * pen_num) + (markers * markers_num) + (detergent * detergent_liters);
    let final_price = price - (price * discount);
    console.log(final_price)
}
supplies(["2", "3", "4", "25"])