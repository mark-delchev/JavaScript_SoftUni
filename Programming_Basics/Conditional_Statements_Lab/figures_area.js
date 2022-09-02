function area(input)
{
    let figure = input[0];
    if (figure === "square")
    {
        let side = input[1];
        let area = side * side;
        console.log(area.toFixed(3));
    }
    else if (figure === "rectangle")
    {
        let side_a = input[1];
        let side_b = input[2];
        let area = side_a * side_b;
        console.log(area.toFixed(3));
    }
    else if (figure === "circle")
    {
        let radius = input[1];
        let area = Math.pow(radius, 2) * Math.PI;
        console.log(area.toFixed(3));
    }
    else
    {
        let a = input[1];
        let ha = input[2];
        let area = (a * ha) / 2;
        console.log(area.toFixed(3));
    }
}
area(["circle", "6"])