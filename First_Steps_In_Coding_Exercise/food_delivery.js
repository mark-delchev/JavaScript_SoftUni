function food(input)
{
    let c_menu = 10.35;
    let f_menu = 12.40;
    let v_menu = 8.15;
    let delivery = 2.50;
    let c_menu_num = Number(input[0]);
    let f_menu_num = Number(input[1]);
    let v_menu_num = Number(input[2]);
    let price = (c_menu * c_menu_num) + (f_menu * f_menu_num) + (v_menu * v_menu_num);
    let dessert = price * 0.20;
    let final_price = price + dessert + delivery;
    console.log(final_price);
}
food(["2", "4", "3"])