let weight = 45;
let height = 1.56;
let BMI = weight / (height * 2);

if (BMI <= 18.5)
    console.log("You're underweight");
else if (BMI < 25)
    console.log("You're normal");
else if (BMI < 30)
    console.log("You're overweight");
else
    console.log("You're OBESITY!!!");