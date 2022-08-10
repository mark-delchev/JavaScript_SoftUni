function repainting(input)
{
    let nylon = 1.50;
    let paint = 14.50;
    let paint_thinner = 5.00;
    let nylon_num = Number(input[0]);
    let paint_liters = Number(input[1]);
    let thinner_liters = Number(input[2]);
    let workers_hours = Number(input[3]);
    let paint_final = paint_liters + (paint_liters * 0.10);
    let nylon_final = nylon_num + 2;
    let bags = 0.40;
    let materials_price = (nylon * nylon_final) + (paint * paint_final) + (paint_thinner * thinner_liters) + bags;
    let workers_price_per_hour = materials_price * 0.30;
    let workers_final_price = workers_hours * workers_price_per_hour;
    let final_price = workers_final_price + materials_price;
    console.log(final_price);
}
repainting(["10", "11", "4", "8"])