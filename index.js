

//Variable
//Creating a variable
//Keyword/reserved
//Rules
//Cannot use a reserved keyword let, const
//Should be meaningful
//Should not start with a number
//Should not have spaces or hyphens
//Case sensitive



//let name = 'Albert'; // String
//console.log(typeof name);
//let age = 1; // Number
//console.log(typeof age);
//let isLate = false; //Boolean
//console.log(typeof isLate);
//let city = undefined;
//console.log(typeof city);
//let selectedCountry = null;
//console.log(typeof selectedCountry);
//
//let age = 12;
//let gender = 'male';
//
//
//if (age > 12 && gender === 'male') {
//
//}
//"2" == 2


//let age = 12;
//
//if(age >= 12){
//    console.log("You are an adult");
//};


//let temperature = 25;
//if(temperature >= 20){
//    console.log("Its hot here")
//}else{
//    console.log("Its not not here")
//}


//let day = "Monday";
//
//switch(day){
//    case "Monday":
//        console.log("Today is Monday");
//        break;
//    case "Tuesday":
//         console.log("Today is Tuesday");
//        break;
//    case "Wednesday":
//        console.log("Today is Wednesday");
//        break;
//    case "Thursday":
//        console.log("Today is Thursday");
//        break;
//    case "Friday":
//        console.log("Today is Friday");
//        break;
//    default:
//        console.log("No day found");
//}
//
//let index = 12;
//while(index < 12){
//    console.log("Index", index)
//}
// Function statement/ Function definition
//function sum(param1, param2, param3){
//    //perform some arithmetic to the digits - Adding
//    return param1 + param2 + param3;
//};
////calling/invoking  a function
//let total  = sum(2, 28, 6);
//console.log("Total",total)


//Function expression
//let sum = function(param1 = 10, param2 = 12, param3 =57){
//    return param1 + param2 + param3;
//}
//
//console.log("This is my function call", sum(13,454,88))

//Task
//Your task is to:
//Create a variable my_num and assign it any number.
//Create a variable my_bool and assign it any boolean.
//Create a variable my_str and assign it any string.



//You are given a variable marks. Your task is to print:
//
//- AA if marks is greater than 90.
//- AB if marks is greater than  80 and less than or equal to 90.
//- BB if marks is greater than  70 and less than or equal to 80.
//- BC if marks is greater than  60 and less than or equal to 70.
//- CC if marks is greater than  50 and less than or equal to 60.
//- CD if marks is greater than  40 and less than or equal to 50.
//- DD if marks is greater than  30 and less than or equal to 40.
//- FF if marks is less than or equal to 30 .
//


// Question 1:
// You are creating a program to calculate the total cost of a shopping cart.
// Write a JavaScript function that takes in two parameters:
// - The price of an item (number)
// - The quantity of the item (number)

// The function should calculate and return the total cost by multiplying the price and quantity.
// However, if either the price or quantity is negative, the function should return 0.

// Example usage:
// calculateTotalCost(10, 5); // should return 50
// calculateTotalCost(15, -3); // should return 0
// calculateTotalCost(-20, 2); // should return 0

//function calculateTotalCost(price, quantity) {
//    // calculate the total cost
//    // check if the price/quantity  is negative then return 0
//    if(price < 0 || quantity < 0 ){
//        return 0;
//    };
//    let totalCost = price * quantity;
//    return totalCost;
//};

// call or invoke the function

//let result1 = calculateTotalCost(10, 5);
//let result2 = calculateTotalCost(13, -3);
//console.log("The first result is ", result1);
//console.log("The second result is ", result2);



// Question 2:
// You are writing a program to calculate the average score of a student in a course.
// Write a JavaScript function that takes in three test scores (numbers) as parameters and returns the average score.
// However, if any of the test scores are negative or greater than 100, the function should return "Invalid score".

// Example usage:
// calculateAverageScore(80, 90, 95); // should return 88.3333
// calculateAverageScore(75, -5, 85); // should return "Invalid score"
// calculateAverageScore(100, 105, 95); // should return "Invalid score"

//function calculateAverageScore( score1, score2, score3){
//    // check if any of the scores are negative or greater than 100
//    if(score1 < 0 || score1 > 100 || score2 < 0 || score2 > 100 || score3 < 0 || score3 > 100) return "Invalid score";
//    return (score1 + score2 + score3)/3;
//};
//
//let result1 = calculateAverageScore(80, 90, 95);
//let result2 = calculateAverageScore(75, -5, 85);
//console.log("The first result is ", result1);
//console.log("The second result is ", result2);




// Question 3:
// You are building a simple ticket booking system for a movie theater.
// Write a JavaScript function that takes in the following parameters:
// - The user's age (number)
// - The movie's rating (string, can be "G", "PG", "PG-13", "R", or "NC-17")

// The function should determine whether the user is eligible to watch the movie based on the following conditions:
// - If the user is 18 years or older, they can watch any movie.
// - If the user is between 13 and 17 years old (inclusive), they can watch movies with ratings up to and including "PG-13".
// - If the user is 12 years old or younger, they can only watch movies with a rating of "G".

// The function should return a boolean value: true if the user is eligible, and false otherwise.

// Example usage:
// isUserEligible(25, "R"); // should return true
// isUserEligible(15, "PG"); // should return true
// isUserEligible(10, "PG-13"); // should return false

// Create a function and give it a name(isUserEligible)
// The function accept 2 parameters(age, ratings)
// Check if the user is 18 years old and above, user is between 13 and 17 years old (inclusive),
// user is 12 years old or younger then return true otherwise false


//function isUserEligible(age, rating) {
//    if(age >= 18 ){
//        return true;
//    } else if( age >= 13  &&  rating !==  "R" && rating !== "NC-17"){
//        return true;
//    }else if( age <= 12 && rating === "G"){
//        return true;
//    } else {
//       return false;
//    }
//}

//params -- placeholders
//argument -- actual values
//console.log(isUserEligible(25, "R")) ;//invoking
//console.log(isUserEligible(15, "PG"));
//console.log(isUserEligible(10, "PG-13"));


// Question 4:
// You are building a temperature converter program.
// Write a JavaScript function that takes in two parameters:
// - The temperature value (number)
// - The temperature unit (string), which can be "C" for Celsius or "F" for Fahrenheit.

// The function should convert the temperature to the other unit and return the converted value.
// The conversion formulas are as follows:
// - Celsius to Fahrenheit: F = (C * 9/5) + 32
// - Fahrenheit to Celsius: C = (F - 32) * 5/9

// The function should round the converted temperature to two decimal places.

// Example usage:
// convertTemperature(25, "C"); // should return 77.00
// convertTemperature(98.6, "F"); // should return 37.00

//
//function convertTemperature(value, unit){
//    if(unit === "C"){
//        return ((value * 9/5) + 32).toFixed(2);
//    }else if(unit === "F"){
//        return ((value - 32) * 5/9).toFixed(2);
//    }
//}


let convertTemperature = (value, unit) => {
    let convertedResult;

    if(unit === "C"){
        convertedResult = (value * 9/5) + 32;
    }else if(unit === "F"){
        convertedResult = (value - 32) * 5/9;
    }

    return convertedResult.toFixed(2);
};  //Arrow function
console.log("convertTemperature", convertTemperature(25, "C"));








// Question:
// You are building a simple registration form for a website.
// Write a JavaScript function that takes in two parameters:
// - The user's age (number)
// - The user's country of residence (string)

// The function should determine whether the user is eligible to register based on the following conditions:
// - The user must be at least 18 years old.
// - The user must be from either the United States, Canada, or the United Kingdom.

// The function should return a boolean value: true if the user is eligible to register, and false otherwise.

// Example usage:
// isUserEligible(20, "United States"); // should return true
// isUserEligible(16, "Canada"); // should return false
// isUserEligible(25, "Germany"); // should return false
