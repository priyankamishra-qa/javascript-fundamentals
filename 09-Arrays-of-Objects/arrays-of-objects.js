// Problem-1 :Extract two properties Brand and Storage ?
let laptop = {
    brand: "HP",
    ram: "16GB",
    storage: "1TB SSD"
};
let {brand , storage} = laptop;
console.log(brand);
console.log(storage);

//Problem-2 :Extract three properties name,role,location ?
let employee1 = {
    name1: "Riya",
    role1: "QA Engineer",
    experience: 2,
    location: "Pune"
};
let {name1 , role1 , location} = employee1;
console.log(name1);
console.log(role1);
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
let user2 = {
    name2: "Aman",
    role2: "Tester"
};
let {name2,role2, experience = 1} = user2;
console.log(name2);
console.log(role2);
console.log(experience);

//Problem-5 :What will be the output 
let mobile = {
    brand1: "Samsung",
    model: "S25",
    price: 80000
};
let { brand1, price } = mobile;
console.log(brand1);
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
let employee2 = {
    name3: "Aman",
    role3: "QA Tester",
    experience: 2
};
let updatedEmployee = {
    ...employee2,
    experience : 3
};
console.log(updatedEmployee);

//Problem-5 : Combine Two Objects , Create a new object called profile containing all four properties.
let personal = {
    name4: "Riya",
    city: "Pune"
};
let professional = {
    role4: "Automation Tester",
    experience: 2
};
let profile = {
    ...personal,
    ...professional
};
console.log(profile);

//Problem-6 :
let user1 = {
    name5: "Priya",
    role5: "QA",
    experience: 2
};
let updatedUser = {
    ...user1,
    experience: 3,
    role5: "Automation QA"
};
console.log(updatedUser);

//{name : "Priya", experience : 3 , role : "Automation QA",}