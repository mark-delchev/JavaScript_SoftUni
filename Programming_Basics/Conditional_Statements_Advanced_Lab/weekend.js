function weekend(input)
{
    const weekend_days = ["Saturday", "Sunday"]
    const working_days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    let day = input[0];
    if (weekend_days.includes(day) == true)
    {
        console.log("Weekend");
    }
    else if (working_days.includes(day) == true)
    {
        console.log("Working day");
    }
    else
    {
        console.log("Error")
    }
}
weekend(["Monday"])