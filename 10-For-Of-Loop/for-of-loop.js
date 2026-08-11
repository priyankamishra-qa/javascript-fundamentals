// ============================================================
// Topic: for...of Loop
// Purpose: Used to iterate over the values of an iterable such as an array.
// Syntax: for (let value of array) { }
// Changes Original Array? No, unless the loop explicitly modifies it.
// Returns: Does not return a new array.
// Example 1 - Print Array Values
let browsers = ["Chrome", "Firefox", "Safari"];
for (let browser of browsers) {
    console.log(browser);
}

// ============================================================
// Topic: for...of with Strings
// Purpose: Iterates through each character of a string.
// Example 2
let tool = "Selenium";
for (let character of tool) {
    console.log(character);
}

// ============================================================
// Topic: for...of with Array of Objects
// Purpose: Used to access each object from an array.
// Example 3
let employees = [
    { name: "Aarav", role: "Tester" },
    { name: "Diya", role: "Developer" },
    { name: "Kabir", role: "QA Engineer" }
];
for (let employee of employees) {
    console.log(employee.name);
    console.log(employee.role);
}
