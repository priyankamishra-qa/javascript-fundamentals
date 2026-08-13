// ============================================================
// Topic: Arithmetic Operators
// Purpose: Used to perform mathematical calculations.
// Operators: +, -, *, /, %, **
// Changes Original Value? No
// Returns: A numeric result.
// Example 1
let price = 800;
let quantity = 3;
console.log(price * quantity);
// Example 2
let totalMarks = 450;
let subjects = 5;
console.log(totalMarks / subjects);

// ============================================================
// Topic: Assignment Operators
// Purpose: Used to assign and update values in variables.
// Operators: =, +=, -=, *=, /=, %=
// Changes Original Value? Yes
// Returns: The updated value.
// Example 1
let salary = 40000;
salary += 5000;
console.log(salary);
// Example 2
let score = 100;
score -= 15;
console.log(score);

// ============================================================
// Topic: Comparison Operators
// Purpose: Used to compare two values.
// Operators: ==, ===, !=, !==, >, <, >=, <=
// Changes Original Value? No
// Returns: true or false.
// Example 1
let experience = 3;
console.log(experience >= 2);
// Example 2
let role = "Tester";
console.log(role === "Developer");

// ============================================================
// Topic: Logical Operators
// Purpose: Used to combine conditions and control decision-making.
// Operators: && (AND), || (OR), ! (NOT)
// Changes Original Value? No
// Returns: Boolean result or, with && / ||, one of the operands.

// ============================================================
// Topic: Logical AND (&&)
// Purpose: Returns true only when both conditions are true.
// Syntax: condition1 && condition2
// Changes Original Value? No
// Returns: Boolean result when used with Boolean conditions.
// Example 1
let age = 26;
let hasExperience = true;
console.log(age >= 21 && hasExperience);
// Example 2
let score1 = 72;
let passedInterview = false;
console.log(score1 >= 60 && passedInterview);

// ============================================================
// Topic: Logical OR (||)
// Purpose: Returns true when at least one condition is true.
// Syntax: condition1 || condition2
// Changes Original Value? No
// Returns: Boolean result when used with Boolean conditions.
// Example 1
let hasGithub = false;
let hasLinkedIn = true;
console.log(hasGithub || hasLinkedIn);
// Example 2
let paymentByCard = false;
let paymentByUPI = true;
console.log(paymentByCard || paymentByUPI);

// ============================================================
// Topic: Logical NOT (!)
// Purpose: Reverses a Boolean value.
// Syntax: !condition
// Changes Original Value? No
// Returns: Boolean result.
// Example 1
let isAvailable = false;
console.log(!isAvailable);
// Example 2
let isLoggedIn = true;
console.log(!isLoggedIn);

// ============================================================
// Topic: Truthy and Falsy Values
// Purpose: JavaScript treats some values as truthy or falsy in logical expressions.
// Syntax: value && value / value || value
// Changes Original Value? No
// Returns: One of the operands.
// Common Falsy Values:
// false, 0, "", null, undefined, NaN
// Example 1
console.log("Hello" && "World");
// Example 2
console.log("" && "World");

// ============================================================
// Topic: Short-Circuit Evaluation with &&
// Purpose: Stops at the first falsy value.
// Syntax: value1 && value2
// Changes Original Value? No
// Returns: First falsy value, otherwise the last value.
// Example 1
console.log(false && "Playwright");

// Example 2
console.log("QA" && "Automation");


// ============================================================
// Topic: Short-Circuit Evaluation with ||
// Purpose: Stops at the first truthy value.
// Syntax: value1 || value2
// Changes Original Value? No
// Returns: First truthy value, otherwise the last value.
// Example 1
console.log(true || "Playwright");
// Example 2
console.log("" || "Default User");

// ============================================================
// Topic: Truthy and Falsy Values
// Purpose: JavaScript treats values as either truthy or falsy when used in conditions.
// Falsy Values: false, 0, "", null, undefined, NaN
// Changes Original Value? No
// Returns: Boolean result when used in a condition.
// Example 1 - Falsy Value
let username = "";
if (username) {
    console.log("Username available");
} else {
    console.log("Username missing");
}
// Example 2 - Truthy Value
let browser = "Chrome";
if (browser) {
    console.log("Browser selected");
} else {
    console.log("No browser selected");
}
// Example 3 - Empty Array is Truthy
let testCases = [];
if (testCases) {
    console.log("Test cases available");
} else {
    console.log("No test cases");
}
// Example 4 - Empty Object is Truthy
let userDetails = {};
if (userDetails) {
    console.log("User details available");
} else {
    console.log("No user details");
}
// Example 5 - 0 is Falsy
let scoreX = 0;
if (scoreX) {
    console.log("Score available");
} else {
    console.log("No score");
}
// Example 6 - "0" is Truthy
let result = "0";

if (result) {
    console.log("Result available");
} else {
    console.log("Result missing");
}

// Common Falsy Values:
// false, 0, "", null, undefined, NaN
// Important:
// [] → Truthy
// {} → Truthy
// "0" → Truthy

// ============================================================
// Topic: Short-Circuit Evaluation with &&
// Purpose: Stops evaluating when the first falsy value is found.
// Syntax: value1 && value2
// Changes Original Value? No
// Returns: First falsy value, otherwise the last value.
// Example 1
console.log(false && "Playwright");
// Example 2
console.log("QA" && "Automation");
// Example 3
console.log("" && "Selenium");
// Example 4
console.log("User" && "Logged in");

// ============================================================
// Topic: Short-Circuit Evaluation with ||
// Purpose: Stops evaluating when the first truthy value is found.
// Syntax: value1 || value2
// Changes Original Value? No
// Returns: First truthy value, otherwise the last value.
// Example 1
console.log("Priya" || "Guest");
// Example 2
console.log("" || "Guest");
// Example 3
console.log(0 || 500);
// Example 4
console.log(null || "Default User");


//Practical Examples
// ============================================================
// Topic: Practical Use of Short-Circuiting
// Purpose: Used to provide fallback values and perform conditional operations.
// Changes Original Value? No
// Returns: One of the operands.
// Example 1 - Default Username
let usernameX = "";
let displayName = usernameX || "Guest";
console.log(displayName);
// Example 2 - Available Username
let userName = "Priya";
let nameToDisplay = userName || "Guest";
console.log(nameToDisplay);
// Example 3 - Check User Before Accessing Property
let user = {
    name: "Priya"
};
console.log(user && user.name);
// Example 4 - Empty Object
let employee = {};
console.log(employee && employee.name);
// Example 5 - Login Status
let isLoggedInto = true;
console.log(isLoggedInto && "Dashboard");
// Example 6 - Login Required
let loggedIn = false;
console.log(loggedIn || "Login Page");

//&& → First falsy value, otherwise last value
//|| → First truthy value, otherwise last value

//Falsy: false,0 ,"" ,null ,undefined,NaN
//Truthy: "Hello","0",[],{},any non-zero number