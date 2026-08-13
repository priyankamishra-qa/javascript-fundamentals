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

// ============================================================
// Topic: Ternary Operator (? :)
// Purpose: Used as a short form of if...else for simple conditions.
// Syntax: condition ? valueIfTrue : valueIfFalse
// Changes Original Value? No
// Returns: One of the two values based on the condition.
// Example 1
let ageX = 24;
let eligibility = ageX >= 18 ? "Eligible" : "Not Eligible";
console.log(eligibility);
// Example 2
let scoreZ = 42;
let resultX = scoreZ >= 50 ? "Pass" : "Fail";
console.log(resultX);
// Example 3
let browserX = "Edge";
let browserStatus = browserX === "Edge" ? "Supported" : "Unsupported";
console.log(browserStatus);
// Example 4
let isLoggedInn = false;
let page = isLoggedInn ? "Dashboard" : "Login Page";
console.log(page);

// ============================================================
// Topic: Ternary with Logical Operators
// Purpose: Combines ternary operators with && and || for simple decisions.
// Changes Original Value? No
// Returns: One of the two values based on the complete condition.
// Example 1 - Ternary with &&
let ageY = 28;
let hasTicket = true;
let entry = ageY >= 18 && hasTicket
    ? "Entry Confirmed"
    : "Entry Denied";
console.log(entry);
// Example 2 - Ternary with &&
let scoreY = 76;
let attendance = 85;
let examStatus = scoreY >= 50 && attendance >= 75
    ? "Exam Passed"
    : "Exam Failed";
console.log(examStatus);
// Example 3 - Ternary with ||
let payment = "Cash";
let paymentStatus = payment === "UPI" || payment === "Cash"
    ? "Payment Accepted"
    : "Payment Rejected";
console.log(paymentStatus);
// Example 4 - Ternary with ||
let device = "Mobile";
let deviceStatus = device === "Desktop" || device === "Tablet"
    ? "Large Screen"
    : "Small Screen";
console.log(deviceStatus);
// Example 5 - Ternary with a Truthy Value
let projectName = "Playwright";
let projectStatus = projectName
    ? "Project Selected"
    : "No Project";
console.log(projectStatus);
// Example 6 - Ternary with a Falsy Value
let testResult = "";
let resultMessage = testResult
    ? "Result Available"
    : "Result Missing";
console.log(resultMessage);
// Example 7 - QA Example
let apiResponse = 201;
let responseBody = true;
let apiResult = apiResponse === 201 && responseBody
    ? "Created Successfully"
    : "Creation Failed";
console.log(apiResult);
// Example 8 - QA Example
let bugs = 3;
let developerFixed = false;
let releaseStatus = bugs === 0 || developerFixed
    ? "Ready for Release"
    : "Needs Fixing";
console.log(releaseStatus);

// ============================================================
// Topic: Mixed Ternary and Logical Operator Examples
// Purpose: Combines ternary, logical operators, and truthy/falsy values.
// Changes Original Value? No
// Returns: A value based on the evaluated conditions.
// Example 1
let name = "Ananya";
let loggedInY = true;
let welcomeMessage = name && loggedInY
    ? "Welcome to Dashboard"
    : "Please Login";
console.log(welcomeMessage);
// Example 2
let usernameis = "";
let displayName1 = usernameis || "Guest";
console.log(displayName1);
// Example 3
let isActive = true;
let isBlocked = true;
let accountStatus = isActive && !isBlocked
    ? "Account Active"
    : "Account Restricted";
console.log(accountStatus);
// Example 4
let browserName = "Opera";
let browserMessage = browserName === "Chrome" || browserName === "Firefox"
    ? "Browser Supported"
    : "Browser Not Supported";
console.log(browserMessage);
// Example 5
let testCount = 12;
let testStatus = testCount > 0
    ? "Tests Found"
    : "No Tests Found";
console.log(testStatus);
// Example 6
let apiResponseX = null;
let responseMessage1 = apiResponseX || "No Response";
console.log(responseMessage1);
// Example 7
let isAuthenticated = true;
let hasRole = false;
let accessMessage = isAuthenticated && hasRole
    ? "Access Granted"
    : "Access Denied";
console.log(accessMessage);
// Example 8
let defects = 0;
let retestCompleted = true;
let buildStatus = defects === 0 && retestCompleted
    ? "Build Approved"
    : "Build Rejected";
console.log(buildStatus);
// Example 9 - Nested Ternary
let experienceX = 5;
let experienceLevel = experienceX >= 5
    ? "Senior"
    : experienceX >= 2
        ? "Mid-Level"
        : "Junior";
console.log(experienceLevel);
// Example 10 - Nested Ternary with QA Scenario
let testScore = 88;
let performance = testScore >= 90
    ? "Excellent"
    : testScore >= 70
        ? "Good"
        : "Needs Improvement";
console.log(performance);
