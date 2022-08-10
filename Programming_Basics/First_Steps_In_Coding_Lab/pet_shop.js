function food_price(input){
    let dog_food = (input[0])
    let cat_food = (input[1])
    let dog_food_price = dog_food * 2.5
    let cat_food_price = cat_food * 4
    let final_price = dog_food_price + cat_food_price
    console.log(`${final_price} lv`)
}
food_price(["5", "4"])