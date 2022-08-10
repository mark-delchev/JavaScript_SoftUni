function info(input) {
    let name = input[0];
    let family = input[1];
    let age = input[2];
    let city = input[3];
    console.log(`You are ${name} ${family}, a ${age}-years old person from ${city}.`);
}
info(["Maria", "Grigorova", 56, "Pleven"]);
