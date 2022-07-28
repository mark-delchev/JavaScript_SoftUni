function yard_greening(input) {
    let size = input[0]
    let price = size * 7.61
    let discount = price * 0.18
    let price_final = price - discount
    console.log(`The final price is: ${price_final} lv.`)
    console.log(`The discount is: ${discount} lv.`)
}
yard_greening(["550"])