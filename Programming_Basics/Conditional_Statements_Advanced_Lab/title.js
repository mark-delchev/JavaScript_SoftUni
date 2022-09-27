function titles(input)
{
    let age = Number(input[0]);
    let sex = input[1];

    if (age < 16 && sex == "m")
    {
        console.log("Master");
    }

    else if (age >= 16 && sex == "m")
    {
        console.log("Mr.");
    }

    else if (age < 16 && sex == "f")
    {
        console.log("Miss");
    }
    
    else
    {
        console.log("Ms.")
    }

}

titles(["12", "f"])