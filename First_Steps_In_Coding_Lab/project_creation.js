function project_time(input) {
    let name = input[0];
    let projects = input[1]
    let time = projects * 3
    console.log(`The architect ${name} will need ${time} hours to complete ${projects} project/s.`)
}
project_time(["Gosho Abadzhiev", 5])