function sum(input)
{
    let seconds1 = input[0];
    let seconds2 = input[1];
    let seconds3 = input[2];
    let seconds_total = +seconds1 + +seconds2 + +seconds3;
    let seconds_final = seconds_total % 60;
    let minutes_final = ~~(seconds_total / 60);
    if (seconds_final < 10)
    {
        console.log(`${minutes_final}:0${seconds_final}`);
    }
    else 
    {
        console.log(`${minutes_final}:${seconds_final}`);
    }
}
sum(["50", "50", "49"])