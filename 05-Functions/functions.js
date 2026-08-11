// ============================================================
// Topic: Functions
// Purpose: A reusable block of code designed to perform a specific task.
// Syntax: function functionName() { }
// Changes Original Value? Depends on the code inside the function.
// Returns: Depends on whether the function uses return.
// Topic: Function Declaration
// Purpose: Defines a reusable function.
// Example 1
function greetUser() {
    console.log("Welcome to JavaScript");
}
greetUser();

// ============================================================
// Topic: Function with Parameters
// Purpose: Allows values to be passed into a function.
// Syntax: function functionName(parameter) { }
// Example 2
function greetPerson(name) {
    console.log("Hello " + name);
}
greetPerson("Rohan");

// ============================================================
// Topic: Function with Return
// Purpose: Returns a value from a function.
// Syntax: return value;
// Example 3
function addNumbers(a, b) {
    return a + b;
}
let result = addNumbers(15, 10);
console.log(result);

// ============================================================
// Topic: Arrow Function
// Purpose: Provides a shorter syntax for writing functions.
// Syntax: const functionName = () => { };
// Example 4
const multiply = (a, b) => {
    return a * b;
};
console.log(multiply(5, 4));
