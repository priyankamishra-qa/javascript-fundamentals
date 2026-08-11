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
let {name , role , location} = employee;
console.log(name);
console.log(role);
console.log(location);

//Problem-3 :Rename Variables name → productName & price → productPrice
let product = {
    name: "Monitor",
    price: 15000
};
let {name : productName , price : productPrice} = product;
console.log(productName);
console.log(productPrice);

//Problem-4 :Set Default value , name/role/experience , set experience 1 by default
let user = {
    name: "Aman",
    role: "Tester"
};
let {name,role , experience = 1} = user;
console.log(name);
console.log(role);
console.log(experience);

//Problem-5 :What will be the output 
let mobile = {
    brand: "Samsung",
    model: "S25",
    price: 80000
};
let { brand, price } = mobile;
console.log(brand);
console.log(price);

//Samsung
//80000


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
let employee = {
    name: "Aman",
    role: "QA Tester",
    experience: 2
};
let updatedEmployee = {
    ...employee,
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
let user = {
    name: "Priya",
    role: "QA",
    experience: 2
};
let updatedUser = {
    ...user,
    experience: 3,
    role: "Automation QA"
};
console.log(updatedUser);
