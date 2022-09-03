function time(input)
{
    let hour = input[0];
    let minutes = input[1];
    let total_minutes = (+minutes + +hour * 60) + 15;
    let hour15 = ~~ (+total_minutes / 60);
    let minutes15 = total_minutes % 60;
    if (hour15 === 24)
    {
        hour15 -= 24;
    }
    if (minutes15 < 10)
    {
        console.log(`${hour15}:0${minutes15}`);
    }
    else
    {
        console.log(`${hour15}:${minutes15}`);
    }
}
time(["23", "46"])