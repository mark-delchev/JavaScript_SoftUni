function booklist(input)
{
    let pages = Number(input[0]);
    let pages_per_hour = Number(input[1]);
    let days = Number(input[2]);
    let time = (pages / pages_per_hour) / days;
    console.log(time);
}
booklist(["212", "20", "2"])