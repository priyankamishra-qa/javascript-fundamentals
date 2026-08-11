// ==============================
// Topic: Rest Operator (...)
// Purpose: Collects multiple remaining values into a single array or object.
// Syntax:
// function functionName(...parameterName) {
//     // code
// }
// Concept-1: Rest Operator with Functions
// Purpose: Collects multiple arguments passed to a function into an array.
// ==================================================
function displayColors(...colors) {
    console.log(colors);
}
displayColors("Blue", "Green", "Yellow", "Purple");

// ==================================================
// Concept-2: Rest Parameter with Normal Parameters
// Purpose: Allows normal parameters to be used along with a Rest Parameter.
// ==================================================
function employeeSkills(employeeName, ...skills) {
    console.log(employeeName);
    console.log(skills);
}
employeeSkills("Kavya", "JavaScript", "Selenium", "API Testing");

// ==================================================
// Concept-3: Rest Operator with forEach()
// Purpose: Processes each value collected by the Rest Parameter.
// ==================================================
function printCities(...cities) {
    cities.forEach(function(city) {
        console.log(city);
    });
}
printCities("Mumbai", "Delhi", "Chennai", "Hyderabad");

// ==================================================
// Concept-4: Rest Operator with Condition
// Purpose: Collects multiple values and allows us to filter them using a condition.
// ==================================================
function showHighTemperatures(...temperatures) {
    temperatures.forEach(function(temperature) {
        if (temperature > 30) {
            console.log(temperature);
        }
    });
}
showHighTemperatures(28, 35, 31, 26, 38);

// ==================================================
// Concept-5: Rest Operator with Object Destructuring
// Purpose: Collects the remaining object properties into a new object.
// ==================================================
let product = {
    productName: "Wireless Keyboard",
    price: 1800,
    brand: "Logitech",
    color: "White"
};
let { productName, ...productDetails } = product;
console.log(productName);
console.log(productDetails);

// ==================================================
// Concept-6: Rest Operator with Multiple Object Properties
// Purpose: Extracts selected properties and collects all remaining properties.
// ==================================================
let project = {
    name: "E-Commerce Testing",
    tester: "Aditi",
    tool: "Playwright",
    status: "Completed",
    duration: "3 Months"
};
let { name, tool, ...projectDetails } = project;
console.log(name);
console.log(tool);
console.log(projectDetails);

// ==============================
// Important Notes:
// 1. Rest Operator is written using three dots (...).
// 2. In functions, Rest collects remaining arguments into an ARRAY.
// 3. In object destructuring, Rest collects remaining properties into an OBJECT.
// 4. A Rest Parameter must always be the LAST parameter.
// 5. Only ONE Rest Parameter can be used in a function.
// ==============================
