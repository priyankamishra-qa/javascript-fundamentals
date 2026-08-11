// ==============================
// Topic: Nullish Coalescing Operator (??)
// Purpose: Provides a default value when a value is null or undefined.
// Syntax: value ?? defaultValue;
// Concept-1: Using ?? with Undefined
// Purpose: Returns the default value when the original value is undefined.
// ==================================================
let username;
console.log(username ?? "Guest");

// ==================================================
// Concept-2: Using ?? with Null
// Purpose: Returns the default value when the original value is null.
// ==================================================
let profilePicture = null;
console.log(profilePicture ?? "default.jpg");

// ==================================================
// Concept-3: ?? Keeps Zero
// Purpose: Unlike ||, ?? does not replace zero because zero is not null or undefined.
// ==================================================
let productCount = 0;
console.log(productCount ?? 10);

// ==================================================
// Concept-4: ?? Keeps Empty String
// Purpose: ?? does not replace an empty string because it is not null or undefined.
// ==================================================
let message = "";
console.log(message ?? "No message available");

// ==================================================
// Concept-5: ?? Keeps False
// Purpose: ?? keeps false because false is not null or undefined.
// ==================================================
let isLoggedIn = false;
console.log(isLoggedIn ?? true);

// ==================================================
// Concept-6: ?? with Optional Chaining
// Purpose: Provides a fallback when an optional property does not exist.
// ==================================================
let employee = {
    name: "Nisha"
};
console.log(employee.contact?.phone ?? "Phone number not available");

// ==============================
// Important Notes:
// 1. ?? is called the Nullish Coalescing Operator.
// 2. It returns the right-side value only when the left-side value is null or undefined.
// 3. 0 is NOT replaced by ??.
// 4. "" is NOT replaced by ??.
// 5. false is NOT replaced by ??.
// 6. ?? is commonly used with Optional Chaining (?.).
// ==============================

