function cat_diet(input)
{
    let fat_percentage = Number(input[0]);
    let protein_percentage = Number(input[1]);
    let carbohydrates_percentage = Number(input[2]);
    let total_calories = Number(input[3]);
    let water_percentage = Number(input[4]);
    let water_percentage_real = water_percentage / 100;
    let fat_grams = (total_calories * (fat_percentage / 100) / 9);
    let protein_grams = (total_calories * (protein_percentage / 100) / 4);
    let carbohydrates_grams = (total_calories * (carbohydrates_percentage / 100) / 4);
    let total_grams = fat_grams + protein_grams + carbohydrates_grams;
    let calories_per_gram = total_calories / total_grams;
    let calories_final = calories_per_gram - (calories_per_gram * water_percentage_real);
    console.log(calories_final.toFixed(4));

}

cat_diet(["60", "25", "15", "2500", "60"])