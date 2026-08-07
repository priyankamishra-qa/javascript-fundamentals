// ==============================
// Topic-1: What is an Objects?
// Purpose: Store related data using key-value pairs.
// Syntax:
// let objectName = {
//     key: value
// };
// Uses: {}
// Access: object.key or object["key"]
// Example:1-Create an object for a book.  //Store - title / author / page 
let book = {
    title : "The Alchemist",
    author : "Paulo Coelho",
    page : 100
};

//Example:2-Create an object for a mobile phone.  //Store - brand / model / price
let mobile = {
    brand : "Iphone",
    model : "14 plus",
    price : 50000
};
//Example:3-Create an object for a QA Engineer.  //Store - name / experience / tool
let engg = {
    name : "Priyanka",
    experience : 2,
    tool : "PowerBI"
}; 
//Example:4-Create an object for a movie.  //Store - name / language / rating
let movie = {
    name : "Dhurandhar",
    language : "Hindi",
    rating : 4.9
}; 
//Example:5-Create an object for a laptop.  //Store - brand / ram / processor / Storage
let laptop = {
    brand : "Dell",
    ram : "16GB",
    processor : "i3 13th GEN",
    storage : "512GB SSD"
}; 

// ==============================
// Topic: Dot Notation
// Purpose: Accesses or updates an object's property using the property name directly.
// Syntax: objectName.propertyName;
// Changes Original Object? No (when accessing)
// Returns: The value of the specified property.
// Example 1
let employee = {
    name: "Rahul",
    role: "QA Engineer",
    experience: 3
};
console.log(employee.role);

// ==============================
// Topic: Bracket Notation
// Purpose: Accesses or updates an object's property using a string or variable.
// Syntax: objectName["propertyName"];
//         objectName[variable];
// Changes Original Object? No (when accessing)
// Returns: The value of the specified property.
// Example 1
let product = {
    name: "Monitor",
    price: 15000,
    brand: "LG"
};
console.log(product["price"]);

// Dot Notation:
// - Use when the property name is known and fixed.

// Bracket Notation:
// - Use when the property name is stored in a variable or contains spaces/special characters.
//Combine Example 
let student = {
    name: "Priya",
    city: "Bangalore"
};
let property = "city";
console.log(student.city);        // Bangalore
console.log(student[property]);   // Bangalore

// ==============================
// Topic: Accessing Object Properties
// Purpose: Access values stored inside an object.
// Syntax:
// object.property
// object["property"]
// Returns: The value of the specified property.
// Example:1
let employee = {
    name: "Priyanka",
    role: "QA Engineer",
    experience: 2
};
console.log(employee.name);          // Dot notation
console.log(employee["role"]);       // Bracket notation
console.log(employee.experience);

//Problem 1-Print name using(.) & company using([])
let browser = {
    name: "Chrome",
    version: 139,
    company: "Google"
};
console.log(browser.name);
console.log(browser["company"]);
//Problem 2-Print all three values (use a mix of . and []).
let testcase = {
    id: 101,
    title: "Login Test",
    status: "Pass"
};
console.log(testcase.id);
console.log(testcase["id"]);

console.log(testcase.title);
console.log(testcase["title"]);

console.log(testcase.status);
console.log(testcase["status"]);

// ==============================
// Topic: Updating Object Properties
// Purpose: Change the value of an existing property.
// Syntax:
// object.property = newValue;
// Returns: Updates the object.
// Example:1
let phone = {
    brand: "Samsung",
    price: 35000
};
phone.price = 38000;
console.log(phone);

// ==============================
// Topic: Adding Object Properties
// Purpose: Add a new property to an existing object.
// Syntax:
// object.newProperty = value;
// Returns: Updates the object with a new property.
// Example:1
let note = {
    title: "Atomic Habits",
    pages: 320
};
note.author = "James Clear";
console.log(note);

// ==============================
// Topic: Deleting Object Properties
// Purpose: Remove a property from an object.
// Syntax:
// delete object.property;
// Returns: Updates the object by removing the property.
// Example:1
let laptops = {
    brand: "Dell",
    ram: "8GB",
    storage: "512GB"
};
delete laptops.ram;
console.log(laptops);

//Combine Problem 
//Problem-1-Add language: "English" & Update rating to 4.9
let theater = {
    name: "Inception",
    rating: 4.7
};
theater.language = "English";
theater.rating = 4.9;
console.log(theater);

//Problem-2-Update status to "Pass" & //Add tester: "Priyanka" & //Delete id
let testCase = {
    id: 101,
    title: "Login Test",
    status: "Fail"
};
testCase.status = "Pass";
testCase.tester = "Priyanka";
delete testCase.id;
console.log(testCase);

// ==============================
// Topic: Arrays of Objects
// Purpose: Store multiple objects inside a single array.
// Syntax:
// let arrayName = [
//     {key1: value1, key2: value2},
//     {key1: value3, key2: value4}
// ];
// Returns: Creates an array containing multiple objects.
// Example:1
let movie1 = [
    {title: "Inception", year: 2010},
    {title: "Interstellar", year: 2014},
    {title: "Avatar", year: 2009}
];
console.log(movie1);

// ==============================
// Topic: Accessing an Object
// Purpose: Access a complete object from an array using its index.
// Syntax:
// arrayName[index];
// Returns: Returns the complete object at the specified index.
// Example:1
let hospitals = [
    {name: "Apollo", city: "Delhi"},
    {name: "Fortis", city: "Mumbai"},
    {name: "AIIMS", city: "Bhopal"}
];
console.log(hospitals[1]);

// ==============================
// Topic: Accessing a Property from an Array of Objects
// Purpose: Access a specific property of an object inside an array.
// Syntax:
// arrayName[index].propertyName;
// Returns: Returns the value of the specified property.
// Example:1
let singers = [
    {name: "Arijit Singh", language: "Hindi"},
    {name: "Shreya Ghoshal", language: "Hindi"},
    {name: "Sid Sriram", language: "Telugu"}
];
console.log(singers[2].name);
console.log(singers[0].language);

// ==============================
// Topic: Updating a Property in an Array of Objects
// Purpose: Change the value of an existing property.
// Syntax:
// arrayName[index].propertyName = newValue;
// Returns: Updates the property value.
// Example:1
let countries = [
    {name: "India", capital: "Delhi"},
    {name: "Japan", capital: "Tokyo"},
    {name: "Australia", capital: "Canberra"}
];
countries[0].capital = "New Delhi";
console.log(countries);

// ==============================
// Topic: Adding a Property in an Array of Objects
// Purpose: Add a new property to an existing object inside an array.
// Syntax:
// arrayName[index].newProperty = value;
// Returns: Adds a new property to the selected object.
// Example:1

let games = [
    {name: "Cricket", players: 11},
    {name: "Football", players: 11},
    {name: "Badminton", players: 2}
];
games[1].country = "Brazil";
console.log(games[1]);

// ==============================
// Topic: Deleting a Property from an Array of Objects
// Purpose: Remove a property from an object inside an array.
// Syntax:
// delete arrayName[index].propertyName;
// Returns: Deletes the specified property.
// Example:1
let flowers = [
    {name: "Rose", color: "Red"},
    {name: "Lily", color: "White"},
    {name: "Lotus", color: "Pink"}
];
delete flowers[2].color;
console.log(flowers[2]);

// ==============================
// Topic: Loop Through an Array of Objects
// Purpose: Access every object one by one using a loop.
// Syntax:
// for(let i = 0; i < arrayName.length; i++){
//     console.log(arrayName[i].propertyName);
// }
// Returns: Prints the specified property from every object.
// Example:1
let planets = [
    {name: "Mercury", order: 1},
    {name: "Venus", order: 2},
    {name: "Earth", order: 3},
    {name: "Mars", order: 4}
];
for(let i = 0; i < planets.length; i++){
    console.log(planets[i].name);
}

// ==============================
// Topic: Nested Objects
// Purpose: Store an object inside another object to organize related data.
// Syntax:
// let objectName = {
//     property1: value,
//     nestedObject: {
//         property1: value,
//         property2: value
//     }
// };
// Returns: Allows accessing, updating, adding, and deleting properties inside another object.
// Example:1 (Accessing Nested Properties) //Use(.) dot notation
//Syntax : objectName.nestedObject.property
let employeeX = {
    id: 101,
    name: "Anjali",
    company: {
        name: "Infosys",
        location: "Hyderabad",
        department: "QA"
    }
};
console.log(employeeX.company.name);        
console.log(employeeX.company.location);    
console.log(employeeX.company.department); 

// Example:2 (Update Nested Property) 
//Syntax : objectName.nestedObject.property = newValue;
employeeX.company.location = "Pune";
console.log(employeeX.company.location);   

// Example:3 (Add Nested Property)
//Syntax : objectName.nestedObject.newProperty = value;
employeeX.company.project = "Banking";
console.log(employeeX.company);

// Example:4 (Delete Nested Property)
//Syntax : delete objectName.nestedObject.property;
delete employeeX.company.department;
console.log(employeeX.company);

//Nested Objects
//Create object and print James & Clear
let storyBook = {
    title: "Atomic Habits",
    author: {
        firstName: "James",
        lastName: "Clear"
    }
};
console.log(storyBook.author.firstName);
console.log(storyBook.author.lastName);

//Print Petrol & 150 
//Update the horsepower to 180 and print it.
//Add: color : "White" inside the car object (not inside engine). Print the whole object.
//Delete the type property from engine and print the object.
let car = {
    brand: "Toyota",
    engine: {
        type: "Petrol",
        horsepower: 150
    }
};
console.log(car.engine.type);
car.engine.horsepower = 180;
car.color = "White";
delete car.engine.type;
console.log(car);



// ==============================
// Topic: for...in Loop
// Purpose: Iterate through the properties (keys) of an object.
// Syntax:
// for(let key in objectName){
//     console.log(key);             // Prints the property name (key)
//     console.log(objectName[key]); // Prints the property value
// }
// Returns: Iterates through each property (key) of an object.
// Note:
// 1. Use dot notation (.) when the property name is known.
// 2. Use bracket notation ([]) when the property name is stored in a variable.
// 3. Mainly used with objects.
// Example:1
let student = {
    name: "Riya",
    course: "QA",
    experience: 2
};

for(let key in student){
    console.log(key);
    console.log(student[key]);
}
//Problem-1 - Print only the Keys
//Problem-2 - Using the same object, print only the values.
//Problem-3 - Print both the keys and values.
let laptopX = {
    brand: "HP",
    ram: "16GB",
    storage: "1TB SSD"
};
console.log("Keys");
for (let key in laptopX){
    console.log(key);
}
console.log("Values");
for (let key in laptopX){
    console.log(laptopX[key]);
}
console.log("Key : Value");
for (let key in laptopX){
    console.log(key + " : " + laptopX[key]);
}

//Problem-4 - Print all keys and values in this format.
let employeeY = {
    id: 501,
    name: "Neha",
    department: "Testing",
    location: "Bangalore"
};
for (let key in employeeY){
    console.log(key + " : " + employeeY[key]);
}

// ==============================
// Topic: for...of Loop
// Purpose: Iterates over the values of an iterable object such as an Array, String, Map, Set, etc.
// Syntax: for (let variable of iterable) { }
// Changes Original Array? No
// Returns: Nothing (used for iteration).
// Example 1

let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
    console.log(fruit);
}

// ==============================
// Topic: Object.keys()
// Purpose: Returns an array containing all the property names (keys) of an object.
// Syntax: Object.keys(objectName);
// Changes Original Object? No
// Returns: Array of keys.
// Example 1
let user = {
    name: "Priya",
    role: "QA"
};
console.log(Object.keys(user));

// ==============================
// Topic: Object.values()
// Purpose: Returns an array containing all the property values of an object.
// Syntax: Object.values(objectName);
// Changes Original Object? No
// Returns: Array of values.
// Example 1
let user = {
    name: "Priya",
    role: "QA"
};
console.log(Object.values(user));

// ==============================
// Topic: Object.entries()
// Purpose: Returns an array of key-value pairs from an object.
// Syntax: Object.entries(objectName);
// Changes Original Object? No
// Returns: Array of [key, value] pairs.
// Example 1
let user = {
    name: "Priya",
    role: "QA"
};
console.log(Object.entries(user));

//Combine Examples -1 : Object.keys() + Loop + Indexing
let student = {
    name: "Ankit",
    age: 24,
    city: "Pune"
};
let keys = Object.keys(student);
console.log(keys[0]);
for (let key of keys) {
    console.log(key, ":", student[key]);
}

// Combine Example 2: Object.values() + Indexing + Loop
let mobile = {
    brand: "Samsung",
    model: "S25",
    color: "Black"
};
let values = Object.values(mobile);
console.log(values[1]);
for (let value of values) {
    console.log(value);
}

//Combine Example 3 : Object.entries() + Destructuring + Indexing
let laptop = {
    brand: "HP",
    ram: "16GB",
    storage: "1TB SSD"
};
let entries = Object.entries(laptop);
console.log(entries[2][1]);
for (let [key, value] of entries) {
    console.log(key, ":", value);
}