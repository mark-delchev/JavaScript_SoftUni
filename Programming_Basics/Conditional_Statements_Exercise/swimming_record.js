function record(input)
{
    let record = Number(input[0]);
    let meters = Number(input[1]);
    let seconds = Number(input[2]);
    let time_needed = seconds * meters;
    let slowing_down = Math.floor(meters / 15);
    let time_needed_final = time_needed + slowing_down * 12.5;
    if (time_needed_final >= record)
    {
        let seconds_left = time_needed_final - record;
        console.log(`No, he failed! He was ${seconds_left.toFixed(2)} seconds slower.`);
    }
    else
    {
        console.log(`Yes, he succeeded! The new world record is ${time_needed_final.toFixed(2)} seconds.`);
    }
}
record(["10464", "1500", "20"]);