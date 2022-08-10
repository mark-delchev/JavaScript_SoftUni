function radians(input)
{
    let radians_num = Number(input[0]);
    let degrees = radians_num * (180 / Math.PI);
    console.log(degrees);
}
radians(["3.1416"])