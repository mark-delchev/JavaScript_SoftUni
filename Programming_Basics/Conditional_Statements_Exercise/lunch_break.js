function lunch(input)
{
    let series = input[0];
    let episode = Number(input[1]);
    let lunch_break = Number(input[2]);
    let lunch = lunch_break * 0.125;
    let rest = lunch_break * 0.25;
    let break_left = lunch_break - lunch - rest; 
    if (break_left < episode)
    {
        time = episode - break_left;
        console.log(`You don't have enough time to watch ${series}, you need ${Math.ceil(time)} more minutes.`);
    }
    else
    {
        time = break_left - episode;
        console.log(`You have enough time to watch ${series} and left with ${Math.ceil(time)} minutes free time.`);
    }
}
lunch(["Game of Thrones", "48", "60"]);