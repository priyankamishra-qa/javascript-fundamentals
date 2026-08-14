// ==============================
// Topic: Object Destructuring
// Purpose: Extracts properties from an object and stores them in variables.
// Syntax: let { property1, property2 } = objectName;
// Changes Original Object? No
// Returns: Creates variables containing the extracted values.
// Example 1
let student = {
    name: "Neha",
    course: "JavaScript",
    level: "Intermediate"
};
let { name, course } = student;
console.log(name);
console.log(course);

// Example 2
let tester = {
    name: "Arjun",
    role: "Automation Tester",
    experience: 3
};
let { name: testerName, role: testerRole } = tester;
console.log(testerName);
console.log(testerRole);

// Example 3 - Default Value
let developer = {
    name: "Kavya",
    skill: "TypeScript"
};
let { name: developerName, skill, experience = 2 } = developer;
console.log(developerName);
console.log(skill);
console.log(experience);

// ==============================
// Topic: Spread Operator (...)
// Purpose: Copies or combines elements/properties into a new array or object.
// Syntax: [...arrayName] or {...objectName}
// Changes Original Array/Object? No
// Returns: A new array or object.
// Example 1 - Copy an Array
let cities = ["Delhi", "Mumbai", "Chennai"];
let cityCopy = [...cities];
console.log(cityCopy);

// Example 2 - Combine Arrays
let manualSkills = ["Functional Testing", "Regression Testing"];
let automationSkills = ["Selenium", "Playwright"];
let qaSkills = [...manualSkills, ...automationSkills];
console.log(qaSkills);

// Example 3 - Copy and Update an Object
let candidate = {
    name: "Sonia",
    role: "QA Engineer",
    experience: 2
};
let updatedCandidate = {
    ...candidate,
    experience: 3
};
console.log(updatedCandidate);

// Object Destructuring → Takes values OUT of an object //let { name } = student;       // Destructuring → take out
// Spread Operator      → Copies/spreads values INTO a new array/object  //let copy = { ...student };    // Spread → copy into new object

//Problem-1 :Extract two properties Brand and Storage ?
let laptop = {
    brand: "HP",
    ram: "16GB",
    storage: "1TB SSD"
};
let {brand , storage} = laptop;
console.log(brand);
console.log(storage);

//Problem-2 :Extract three properties name,role,location ?
let employee = {
    name: "Riya",
    role: "QA Engineer",
    experience: 2,
    location: "Pune"
};
let {nameX , role , location} = employee;
console.log(nameX);
console.log(role);
console.log(location);

//Problem-3 :Rename Variables name → productName & price → productPrice
let product = {
    nameY: "Monitor",
    price: 15000
};
let {nameY : productName , price : productPrice} = product;
console.log(productName);
console.log(productPrice);

//Problem-4 :Set Default value , name/role/experience , set experience 1 by default
let user = {
    nameA: "Aman",
    roleX: "Tester"
};
let {nameA, roleX , experienceX = 1} = user;
console.log(nameA);
console.log(roleX);
console.log(experienceX);

//Problem-5 :What will be the output 
let mobile = {
    brand: "Samsung",
    model: "S25",
    price: 80000
};
let { brandX, price } = mobile;
console.log(brandX);
console.log(price);

//Problem-1 : Copy an array , Create a new array called browserCopy using spread.
let browsers = ["Chrome", "Firefox", "Edge"];
let browserCopy = [...browsers];
console.log(browserCopy);

//problem-2 : Combine two arrays , Create skills containing all values.   
let frontend = ["HTML", "CSS", "JavaScript"];
let testing = ["Selenium", "Playwright"];
let skills = [...frontend , ...testing];
console.log(skills);

//Problem-3 : Add an Element While Copying , create qaTools that contains Selenium,Postman,Playwright
let tools = ["Selenium", "Postman"]; 
let qaTools = [...tools , "Playwright"];
console.log(qaTools);

//Problem-4 : Copy and Update an Object , Create updatedEmployee using spread and change:
let employee1 = {
    name: "Aman",
    role: "QA Tester",
    experience: 2
};
let updatedEmployee = {
    ...employee1,
    experience : 3
};
console.log(updatedEmployee);

//Problem-5 : Combine Two Objects , Create a new object called profile containing all four properties.
let personal = {
    name: "Riya",
    city: "Pune"
};
let professional = {
    role: "Automation Tester",
    experience: 2
};
let profile = {
    ...personal,
    ...professional
};
console.log(profile);

//Problem-6 :
let userA = {
    name: "Priya",
    role: "QA",
    experience: 2
};
let updatedUser = {
    ...userA,
    experience: 3,
    role: "Automation QA"
};
console.log(updatedUser);

// ============================================================
// Topic: Callback Functions
// Purpose: A callback is a function passed as an argument to
// another function and executed by that function.
// Syntax: functionName(argument, callbackFunction);
// Changes Original Value? No
// Returns: Depends on the callback function.
// Example 1 - Basic Callback
function launchTest(callbackFunction) {
    console.log("Test Execution Started");
    callbackFunction();
}
function completeTest() {
    console.log("Test Execution Completed");
}
launchTest(completeTest);

// Example 2 - Another Callback
function openTestReport(callbackFunction) {
    console.log("Opening Test Report");
    callbackFunction();
}
function verifyReport() {
    console.log("Report Verified");
}
openTestReport(verifyReport);

// ============================================================
// Topic: Callback with Parameters
// Purpose: A callback can receive data from the main function.
// Syntax: callback(value);
// Changes Original Value? No
// Returns: Depends on the callback function.
// Example 1
function generateBuildStatus(callbackFunction) {
    let buildResult = "Successful";

    callbackFunction(buildResult);
}
function displayBuildStatus(result) {
    console.log("Build Status: " + result);
}
generateBuildStatus(displayBuildStatus);

// Example 2
function identifyEnvironment(callbackFunction) {
    let environmentName = "QA";

    callbackFunction(environmentName);
}
function displayEnvironment(environment) {
    console.log("Environment: " + environment);
}
identifyEnvironment(displayEnvironment);

// ============================================================
// Topic: Callback with an Anonymous Function
// Purpose: A callback can be written directly inside a function call.
// Syntax: functionName(function () { });
// Changes Original Value? No
// Returns: Depends on the callback.
// Example 1
function prepareEnvironment(callbackFunction) {
    console.log("Preparing Environment");
    callbackFunction();
}
prepareEnvironment(function () {
    console.log("Environment Ready");
});

// Example 2
function sendTestRequest(callbackFunction) {
    console.log("Request Sent");

    callbackFunction("Response Received");
}
sendTestRequest(function (message) {
    console.log(message);
});

// ============================================================
// Topic: Passing a Function vs Calling a Function
// Purpose: Understand the difference between passing a function
// and executing a function immediately.
// Example 1
function displayTestMessage() {
    console.log("Test Message Displayed");
}
function executeTestAction(callbackFunction) {
    callbackFunction();
}
executeTestAction(displayTestMessage);

// Important:
// displayTestMessage  → passes the function
// displayTestMessage() → executes the function immediately

// ============================================================
// Topic: Higher-Order Functions
// Purpose: A higher-order function accepts another function
// as an argument or returns another function.
// Changes Original Value? No
// Returns: Depends on the function.
// Example 1 - Accepting a Function
function performValidation(validationName, callbackFunction) {
    console.log("Validation: " + validationName);
    callbackFunction();
}
function finishValidation() {
    console.log("Validation Completed");
}
performValidation("Login Validation", finishValidation);

// Example 2 - Returning a Function
function createAlertMessage() {

    return function () {
        console.log("Alert Message Displayed");
    };
}
let alertMessage = createAlertMessage();
alertMessage();

// ============================================================
// Topic: Higher-Order Function with Parameters
// Purpose: A higher-order function can pass data to a callback.
// Example 1
function evaluateScore(scoreValue, callbackFunction) {
    let evaluation = scoreValue >= 60 ? "Qualified" : "Not Qualified";

    callbackFunction(evaluation);
}
evaluateScore(75, function (result) {
    console.log("Evaluation: " + result);
});

// Example 2
function validateCandidate(candidateName, callbackFunction) {
    let candidateStatus = candidateName ? "Candidate Found" : "Candidate Missing";
    callbackFunction(candidateStatus);
}
validateCandidate("Meera", function (result) {
    console.log(result);
});

// ============================================================
// Topic: Callbacks with Array Methods
// Purpose: Array methods such as forEach(), map(), filter(),
// and find() are higher-order functions because they accept
// callback functions.
// Example 1 - forEach()
let testingToolsList = ["JIRA", "Postman", "Selenium"];
testingToolsList.forEach(function (toolName) {
    console.log(toolName);
});

// Example 2 - map()
let testExecutionCounts = [1, 2, 3];
let updatedExecutionCounts = testExecutionCounts.map(function (countValue) {
    return countValue + 2;
});
console.log(updatedExecutionCounts);

// Important:
// forEach(), map(), filter(), and find()
// are Higher-Order Functions.
// The functions passed into them are Callback Functions.
// ============================================================
// Topic: Callback + Higher-Order Function
// Purpose: Understand how a higher-order function receives
// and executes a callback.
// Example 1
function executeValidation(validationType, callbackFunction) {
    console.log("Validation Type: " + validationType);

    let validationResult = "Successful";

    callbackFunction(validationResult);
}
executeValidation("API Validation", function (result) {
    console.log("Validation Result: " + result);
});

// ============================================================
// Practice-1 / Solved Problems - Round 1
function beginTest(callbackFunction) {
    console.log("Test Started");
    callbackFunction();
}
function endTest() {
    console.log("Test Finished");
}
beginTest(endTest);

// Problem 2
function handleResponse(callbackFunction) {
    let responseStatus = "Success";

    callbackFunction(responseStatus);
}
function displayResponse(result) {
    console.log("API: " + result);
}
handleResponse(displayResponse);

// Problem 3
function authenticateUser(usernameValue, callbackFunction) {
    console.log("User: " + usernameValue);
    callbackFunction();
}
authenticateUser("Rohan", function () {
    console.log("Dashboard Opened");
});

// Problem 4
function executeValidationTest(callbackFunction) {
    console.log("Running Test");
    callbackFunction();
}
executeValidationTest(function () {
    console.log("Test Passed");
});

// Problem 5
function runPaymentTest(testNameValue, callbackFunction) {
    let paymentResult = "Passed";

    console.log("Test: " + testNameValue);

    callbackFunction(paymentResult);
}
function displayPaymentResult(result) {
    console.log("Result: " + result);
}
runPaymentTest("Payment Test", displayPaymentResult);

// ============================================================
// Practice-6/ Solved Problems - Round 2
function performDatabaseAction(actionName, callbackFunction) {
    console.log("Action: " + actionName);
    callbackFunction();
}
function completeDatabaseAction() {
    console.log("Action Completed");
}
performDatabaseAction("Database Check", completeDatabaseAction);

// Problem 7
function generateBuildMessage() {

    return function () {
        console.log("Build Successful");
    };
}
let buildMessage = generateBuildMessage();
buildMessage();

// Problem 8
function executeAutomationTest(testNameValue, callbackFunction) {
    console.log("Running: " + testNameValue);
    callbackFunction("Passed");
}

executeAutomationTest("Login Test", function (result) {
    console.log("Status: " + result);
});

// Problem 9
function createSelectedBrowser() {

    return function () {
        console.log("Chrome Selected");
    };
}
let selectedBrowser = createSelectedBrowser();
selectedBrowser();

// Problem 10
function processAutomationTest(callbackFunction) {
    let automationResult = "Passed";

    callbackFunction(automationResult);
}
processAutomationTest(function (result) {
    console.log("Test Result: " + result);
});

// ============================================================
// Practice-11 / Solved Problems - Round 3
function executeNamedTest(testNameValue, callbackFunction) {
    let testStatus = "Passed";

    callbackFunction(testNameValue, testStatus);
}
executeNamedTest("Login Test", function (nameValue, resultValue) {
    console.log(nameValue + " : " + resultValue);
});

// Problem 12
function validateAPIResponse(responseCode, callbackFunction) {
    callbackFunction(responseCode === 200);
}
validateAPIResponse(200, function (isResponseValid) {
    console.log(isResponseValid ? "API Valid" : "API Failed");
});

// Problem 13
function chooseBrowser(browserName, callbackFunction) {
    console.log("Selected: " + browserName);
    callbackFunction(browserName);
}
chooseBrowser("Firefox", function (browserValue) {
    console.log("Starting tests on " + browserValue);
});

// Problem 14
function runExecution(callbackFunction) {

    let executionDetails = {
        status: "Passed",
        duration: 4
    };

    callbackFunction(executionDetails);
}
runExecution(function (executionResult) {
    console.log(executionResult.status);
    console.log(executionResult.duration + " seconds");
});

// Problem 15
function createAutomationRunner(testNameValue) {

    return function () {
        console.log("Executing: " + testNameValue);
    };
}
let loginValidationTest = createAutomationRunner("Login Validation");
loginValidationTest();

// ============================================================
// Practice-16 / Solved Problem - Mixed Callback + HOF
function executeLoginTest(testNameValue, callbackFunction) {

    console.log("Starting: " + testNameValue);

    let testDetails = {
        status: "Passed",
        browser: "Chrome"
    };

    callbackFunction(testDetails);
}
executeLoginTest("Login Test", function (testResult) {

    if (testResult.status === "Passed") {
        console.log("Test Successful");
    }

    console.log("Browser: " + testResult.browser);
});

// ============================================================
// Practice-17 / Solved Problem - Object Data with Callback
let responseData = {
    status: 200,
    message: "Success"
};
function inspectAPIResponse(responseObject, callbackFunction) {
    callbackFunction(responseObject);
}
inspectAPIResponse(responseData, function (apiResult) {
    console.log(apiResult.status);
    console.log(apiResult.message);
});
