// ============================================================
// Topic: Conditions
// Purpose: Used to execute different blocks of code based on conditions.
// Keywords: if, else if, else
// Changes Original Value? No
// Returns: Executes a block when its condition is true.
// Topic: if Statement
// Purpose: Executes a block when the condition is true.
// Syntax: if (condition) { }
// Example 1
let age = 25;
if (age >= 18) {
    console.log("Eligible to vote");
}

// ============================================================
// Topic: if...else Statement
// Purpose: Executes one block if true and another if false.
// Syntax: if (condition) { } else { }
// Example 2
let score = 45;
if (score >= 50) {
    console.log("Passed");
} else {
    console.log("Failed");
}

// ============================================================
// Topic: else if Statement
// Purpose: Checks multiple conditions.
// Syntax: if (condition) { } else if (condition) { } else { }
// Example 3
let marks = 82;
if (marks >= 90) {
    console.log("Grade A+");
} else if (marks >= 75) {
    console.log("Grade A");
} else if (marks >= 60) {
    console.log("Grade B");
} else {
    console.log("Grade C");
}

// ============================================================
// Topic: Switch Statement
// Purpose: Used to compare one value with multiple possible values.
// Syntax: switch (expression) { case value: code; break; default: code; }
// Changes Original Value? No
// Returns: Executes the matching case.
// ============================================================
// Topic: Basic Switch Statement
// Purpose: Checks a value against different cases.
// Example 1
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid Day");
}

// Example 2
let browser = "Firefox";
switch (browser) {
    case "Chrome":
        console.log("Chrome Selected");
        break;

    case "Firefox":
        console.log("Firefox Selected");
        break;

    default:
        console.log("Unsupported Browser");
}

// ============================================================
// Topic: break
// Purpose: Stops the switch statement after a matching case.
// Changes Original Value? No
// Returns: Stops further case execution.
// Example 1
let environment = "QA";
switch (environment) {
    case "DEV":
        console.log("Development Environment");
        break;

    case "QA":
        console.log("Testing Environment");
        break;

    case "PROD":
        console.log("Production Environment");
        break;

    default:
        console.log("Unknown Environment");
}

// ============================================================
// Topic: default
// Purpose: Executes when none of the cases match.
// Changes Original Value? No
// Returns: Executes the default block.
// Example 1
let paymentMethod = "Wallet";
switch (paymentMethod) {
    case "UPI":
        console.log("UPI Payment");
        break;

    case "Card":
        console.log("Card Payment");
        break;

    case "Cash":
        console.log("Cash Payment");
        break;

    default:
        console.log("Unknown Payment Method");
}

// ============================================================
// Topic: Multiple / Grouped Cases
// Purpose: Allows multiple values to execute the same code.
// Changes Original Value? No
// Returns: Executes shared code for matching cases.
// Example 1
let device = "Tablet";
switch (device) {
    case "Desktop":
    case "Laptop":
    case "Tablet":
        console.log("Large Screen Device");
        break;

    case "Mobile":
        console.log("Small Screen Device");
        break;

    default:
        console.log("Unknown Device");
}

// Example 2
let testType = "Regression";
switch (testType) {
    case "Functional":
    case "Regression":
    case "System":
        console.log("Application Testing");
        break;

    case "Performance":
        console.log("Performance Testing");
        break;

    default:
        console.log("Unknown Test Type");
}

// ============================================================
// Topic: Fall-Through
// Purpose: Allows execution to continue into the next case when
// break is not used.
// Changes Original Value? No
// Returns: Executes statements from subsequent cases.
// Example 1
let team = "Automation";
switch (team) {
    case "Manual":
        console.log("Manual Testing");

    case "Automation":
        console.log("Automation Testing");
        break;

    default:
        console.log("Other Team");
}

// Example 2
let role = "Tester";
switch (role) {
    case "Tester":
        console.log("Execute Test Cases");

    case "Automation":
        console.log("Run Automation Tests");
        break;

    default:
        console.log("Unknown Role");
}

// ============================================================
// Topic: Switch with API Status Codes
// Purpose: Used to handle different API response codes.
// Example 1
let statusCode = 201;
switch (statusCode) {
    case 200:
    case 201:
        console.log("Request Successful");
        break;

    case 400:
    case 404:
        console.log("Client Error");
        break;

    case 500:
    case 503:
        console.log("Server Error");
        break;

    default:
        console.log("Unknown Response");
}

// ============================================================
// Topic: Switch with Build Status
// Purpose: Used to handle different application build results.
// Example 1
let buildStatus = "Approved";
switch (buildStatus) {
    case "Passed":
    case "Approved":
        console.log("Build Ready for Deployment");
        break;

    case "Failed":
    case "Rejected":
        console.log("Build Requires Fixes");
        break;

    default:
        console.log("Build Status Unknown");
}
