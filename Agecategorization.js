// Collect user's age using prompt
let age = parseInt(prompt("How old are you? : "));

// Conditional statements to categorize the user's age
if (age < 5) {
    console.log("You are a Baby! (under 5 years).");
} else if (age >= 5 && age <= 12) {
    console.log("You Are a Children! (5-12 years).");
} else if (age >= 13 && age <= 19) {
    console.log("You are an teenager! (13-19 years).");
} else if (age >= 20 && age <= 35) {
    console.log("You are now an Adult (20-35 years).");
} else if (age >= 36 && age <= 60) {
    console.log("You are an Middle-Aged! (36-60 years).");
} else if (age > 60) {
    console.log("You are now an Senior Citizen! (over 60 years).");
} else {
    console.log("Di matukoy ang iyong edad.");
}