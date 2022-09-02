function password(input)
{
    let pass = "s3cr3t!P@ssw0rd";
    let pass_guess = input[0];
    if (pass_guess === pass)
    {
        console.log("Welcome");
    }
    else
    {
        console.log("Wrong password!");
    }
}