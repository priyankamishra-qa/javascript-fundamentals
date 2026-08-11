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