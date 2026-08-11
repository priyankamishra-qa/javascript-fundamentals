// ============================================================
// Topic: Arrays
// Purpose: Used to store multiple values in a single variable.
// Syntax: let arrayName = [value1, value2, value3];
// Changes Original Array? Depends on the operation.
// Returns: Depends on the operation.
// Topic: Creating an Array
// Example 1
let browsers = ["Chrome", "Firefox", "Edge"];
console.log(browsers);

// ============================================================
// Topic: Accessing Array Elements
// Purpose: Access elements using their index.
// Syntax: arrayName[index]
// Index starts from 0.
// Example 2
let tools = ["Selenium", "Postman", "Playwright"];
console.log(tools[0]);
console.log(tools[2]);

// ============================================================
// Topic: Updating Array Elements
// Purpose: Changes an existing element using its index.
// Example 3
let languages = ["Java", "Python", "JavaScript"];
languages[1] = "TypeScript";
console.log(languages);

// ============================================================
// Topic: Array length
// Purpose: Returns the number of elements in an array.
// Syntax: arrayName.length
// Changes Original Array? No
// Returns: Number.
// Example 4
let testTypes = [
    "Functional",
    "Regression",
    "API",
    "UI"
];
console.log(testTypes.length);
