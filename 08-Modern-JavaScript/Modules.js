// JavaScript Modules - Export and Import
// 1. Named Export Example
function add(a, b) {
    return a + b;
}
export { add };

// 2. Multiple Named Exports
function login() {
    return "Login successful";
}

function logout() {
    return "Logout successful";
}

function getStatus() {
    return "Passed";
}
export { login, logout, getStatus };

// 3. Default Export Example
function getUser() {
    return "User found";
}
export default getUser;

// 4. QA/API Utility Example
function validateStatus(statusCode) {
    return statusCode >= 200 && statusCode < 300;
}
export { validateStatus };

// 5. Configuration Example
const baseURL = "https://api.example.com";
const environment = "QA";
const browser = "Chrome";
export { baseURL, environment, browser };