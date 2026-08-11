// ============================================================
// Topic: Loops
// Purpose: Used to repeatedly execute a block of code.
// Types: for, while, do...while
// Changes Original Value? Depends on the code inside the loop.
// Returns: Depends on the code inside the loop.
// Topic: for Loop
// Purpose: Repeats code for a known number of times.
// Syntax: for (initialization; condition; update) { }
// Example 1
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// ============================================================
// Topic: while Loop
// Purpose: Repeats code while a condition remains true.
// Syntax: while (condition) { }
// Example 2
let count = 1;
while (count <= 3) {
    console.log(count);
    count++;
}

// ============================================================
// Topic: do...while Loop
// Purpose: Executes the block at least once before checking the condition.
// Syntax: do { } while (condition);
// Example 3
let number = 1;
do {
    console.log(number);
    number++;
} while (number <= 3);

// ============================================================
// Topic: break
// Purpose: Stops the loop immediately.
// Syntax: break;
// Example 4
for (let i = 1; i <= 5; i++) {

    if (i === 4) {
        break;
    }
    console.log(i);
}

// ============================================================
// Topic: continue
// Purpose: Skips the current iteration and continues the loop.
// Syntax: continue;
// Example 5
for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        continue;
    }

    console.log(i);
}
