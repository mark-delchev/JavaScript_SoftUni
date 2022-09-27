function cinema(input)
{
    let day = input[0];

    if (day == "Monday" || day == "Tuesday" || day == "Friday")
    {
        console.log(12);
    }
    else if (day == "Saturday" || day == "Sunday")
    {
        console.log(16);
    }
    else
    {
        console.log(14);
    }
}