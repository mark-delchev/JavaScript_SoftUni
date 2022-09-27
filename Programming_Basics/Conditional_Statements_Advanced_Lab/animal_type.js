function type(input)
{
    let animal = input[0];
    const reptiles = ["crocodile", "tortoise", "snake"];

    if (animal == "dog")
    {
        console.log("mammal");
    }

    else if (reptiles.includes(animal) == true)
    {
        console.log("reptile");
    }

    else
    {
        console.log("unknown");
    }
}