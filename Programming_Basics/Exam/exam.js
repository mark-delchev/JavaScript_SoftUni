function exam(input)
{
    let students = Number(input[0])
    let fail_grades = 0
    let middle_grades = 0
    let good_grades = 0
    let excellent_grades = 0
    let total_grade = 0
    for (let i = 1; i < students + 1; i++)
    {
        let grade = Number(input[i])
        total_grade += grade
        if (grade < 3.00)
        {
            fail_grades += 1
        }
        else if (grade < 4.00)
        {
            middle_grades += 1
        }
        else if (grade < 5.00)
        {
            good_grades += 1
        }
        else
        {
            excellent_grades += 1
        }

    }
    console.log(`Top students: ${((excellent_grades / students) * 100).toFixed(2)}%`)
    console.log(`Between 4.00 and 4.99: ${((good_grades / students) * 100).toFixed(2)}%`)
    console.log(`Between 3.00 and 3.99: ${((middle_grades / students) * 100).toFixed(2)}%`)
    console.log(`Fail: ${((fail_grades / students) * 100).toFixed(2)}%`)
    console.log(`Average: ${(total_grade / students).toFixed(2)}`)
}
exam(["10", "3.00", "2.99", "5.68", "3.01", "4", "4", "6.00", "4.50", "2.44", "5"])