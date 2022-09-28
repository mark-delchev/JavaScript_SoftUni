function shop(input)
{
    let fruit = input[0];
    let day = input[1];
    let amount = Number(input[2]);
    let final_price = -1;
    
    const weekend = ["Saturday", "Sunday"];
    const working_days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    const workdays_price = [2.5, 1.2, 0.85, 1.45, 2.7, 5.5, 3.85];
    const weekend_price = [2.7, 1.25, 0.9, 1.6, 3.00, 5.60, 4.2];

    if (working_days.includes(day) == true)
    {
        if (fruit == "banana")
        {
            final_price = amount * workdays_price[0];
        }
        else if (fruit == "apple")
        {
            final_price = amount * workdays_price[1];
        }
        else if (fruit == "orange")
        {
            final_price = amount * workdays_price[2];
        }
        else if (fruit == "grapefruit")
        {
            final_price = amount * workdays_price[3];
        }
        else if (fruit == "kiwi")
        {
            final_price = amount * workdays_price[4];
        }
        else if (fruit == "pineapple")
        {
            final_price = amount * workdays_price[5];
        }
        else if (fruit == "grapes")
        {
            final_price = amount * workdays_price[6];
        }
    }

    else if (weekend.includes(day) == true)
    {
        if (fruit == "banana")
        {
            final_price = amount * weekend_price[0];
        }
        else if (fruit == "apple")
        {
            final_price = amount * weekend_price[1];
        }
        else if (fruit == "orange")
        {
            final_price = amount * weekend_price[2];
        }
        else if (fruit == "grapefruit")
        {
            final_price = amount * weekend_price[3];
        }
        else if (fruit == "kiwi")
        {
            final_price = amount * weekend_price[4];
        }
        else if (fruit == "pineapple")
        {
            final_price = amount * weekend_price[5];
        }
        else if (fruit == "grapes")
        {
            final_price = amount * weekend_price[6];
        }
    }
    if (final_price > -1)
    {
        console.log(final_price.toFixed(2))
    }
    else
    {
        console.log("error");
    }
}

//shop(["tomato", "Monday", "3"])