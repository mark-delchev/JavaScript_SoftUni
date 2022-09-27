function shop(input)
{
    let product = input[0];
    let city = input[1];
    let amount = Number(input[2]);
    let final_price = 0;

    const Sofia = [0.5, 0.8, 1.2, 1.45, 1.6];
    const Plovdiv = [0.4, 0.7, 1.15, 1.3, 1.5];
    const Varna = [0.45, 0.7, 1.1, 1.35, 1.55];

    if (city == "Sofia")
    {
        if (product == "coffee")
        {
            final_price = amount * Sofia[0]
        }
        else if (product == "water")
        {
            final_price = amount * Sofia[1]
        }
        else if (product == "beer")
        {
            final_price = amount * Sofia[2]
        }
        else if (product == "sweets")
        {
            final_price = amount * Sofia[3]
        }
        else if (product == "peanuts")
        {
            final_price = amount * Sofia[4]
        }  
    }

    else if (city == "Plovdiv")
    {
        if (product == "coffee")
        {
            final_price = amount * Plovdiv[0]
        }
        else if (product == "water")
        {
            final_price = amount * Plovdiv[1]
        }
        else if (product == "beer")
        {
            final_price = amount * Plovdiv[2]
        }
        else if (product == "sweets")
        {
            final_price = amount * Plovdiv[3]
        }
        else if (product == "peanuts")
        {
            final_price = amount * Plovdiv[4]
        }  
    }

    else 
    {
        if (product == "coffee")
        {
            final_price = amount * Varna[0]
        }
        else if (product == "water")
        {
            final_price = amount * Varna[1]
        }
        else if (product == "beer")
        {
            final_price = amount * Varna[2]
        }
        else if (product == "sweets")
        {
            final_price = amount * Varna[3]
        }
        else if (product == "peanuts")
        {
            final_price = amount * Varna[4]
        }  
    }
    console.log(final_price);

}

