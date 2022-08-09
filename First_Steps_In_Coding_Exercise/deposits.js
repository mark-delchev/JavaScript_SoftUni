function deposits(input)
{
    let deposit = Number(input[0]);
    let months = Number(input[1]);
    let percentage = Number(input[2]) / 100;
    let final_deposit = deposit + months * ((deposit * percentage) / 12);
    console.log(final_deposit)
}
deposits(["200", "3", "5.7 "])