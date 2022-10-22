function everest(input)
{
    let starting_height = 5364
    let everest = 8848
    let day_counter = 1
    while (starting_height < everest)
    {
        command = input[0]
        if (command == "END")
        {
            console.log("Failed!")
            console.log(starting_height)
            break
        }
        let climbed_height = Number(input[1])
        if (command == "Yes")
        {
            day_counter += 1
        }
        if (day_counter > 5)
        {
            console.log("Failed!")
            console.log(starting_height)
            break
        }
        starting_height += climbed_height
    }
    if (starting_height >= everest)
    {
        console.log(`Goal reached for ${day_counter} days!`)
    }
}
everest((["Yes", "1254", "Yes", "1402", "No", "250", "Yes", "635"]))


