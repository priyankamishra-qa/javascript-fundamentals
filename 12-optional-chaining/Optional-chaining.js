
// ==============================
// Topic: Optional Chaining (?.)
// Purpose: Safely accesses properties, array elements, or functions without throwing an error when a value is null or undefined.
// Syntax: object?.property;
// ==============================
// Example-1: Basic Optional Chaining
let employee = {
    name: "Kavya",
    department: "Testing"
};
console.log(employee.address?.city);

// Example-2: Nested Optional Chaining
let company = {
    name: "TechWorld",
    manager: {
        details: {
            email: "manager@techworld.com"
        }
    }
};
console.log(company.manager?.details?.email);

// Example-3: Optional Chaining with Arrays
let products = [
    { name: "Laptop", price: 55000 },
    { name: "Tablet", price: 25000 }
];
console.log(products?.[1]?.price);

// Example-4: Accessing a Missing Array Element
let students = [
    { name: "Riya" },
    { name: "Aman" }
];
console.log(students?.[2]?.name);

// Example-5: Optional Chaining with Functions
let user = {
    name: "Neha",
    greet: function() {
        return "Hello Neha";
    }
};
console.log(user.greet?.());

// Example-6: Optional Chaining with Missing Function
let account = {
    username: "Arjun"
};
console.log(account.logout?.());

// ==============================
// Important Notes:
// 1. ?. safely accesses a property.
// 2. If the property does not exist, it returns undefined instead of an error.
// 3. For nested objects, use ?. at each level that may be missing.
// 4. For arrays, use ?. before the index: array?.[index].
// 5. For functions, use ?.() to safely call a function.
// 6. Optional Chaining is commonly used with API responses and nested data.
// ==============================

