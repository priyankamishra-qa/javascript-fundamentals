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
