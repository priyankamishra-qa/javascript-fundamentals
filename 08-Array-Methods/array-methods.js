// PUSH() POP() SHIFT() UNSHIFT() INCLUDE() INDEXOF() SLICE() SPLICE() CONCATE() JOIN() REVERSE() SORT()

// ==============================
// push()
// Purpose: Adds one or more elements to the end of an array.
// Syntax : array.push(element1, element2);
// Changes Original Array? Yes
// Returns: New length of the array.
//Program 1 - Add Blue
let colors = ["Red", "Green"];
colors.push("Blue");
console.log(colors)
//Challenge-1
let fruits1 = ["Apple"];
fruits1.push("Banana");
fruits1.push("Mango");
console.log(fruits1);

// ==============================
// pop()
// Purpose: Removes the last element from an array.
// Syntax : array.pop();
// Changes Original Array? Yes
// Returns: The removed element.
//Program 2 - remove the last element
let animals = ["Dog", "Cat", "Lion"];
animals.pop( );
console.log(animals);

// ==============================
// shift()
// Purpose: Removes the first element from an array.
// Syntax : array.shift();
// Changes Original Array? Yes
// Returns: The removed element.
//Program 4 - remove the first element
let numbers = [10, 20, 30];
numbers.shift( );
console.log(numbers);

// ==============================
// unshift()
// Purpose: Adds one or more elements to the beginning of an array.
// Syntax : array.unshift(element1, element2);
// Changes Original Array? Yes
// Returns: New length of the array.
//Program 3 - Add Banglore
let cities = ["Delhi", "Mumbai"];
cities.unshift("Bangalore");
console.log(cities);

//Challenge-1
let fruits = ["Apple", "Banana", "Mango"];
fruits.pop();
fruits.shift();
console.log(fruits);

//Challenge-2
let fruits3 = ["Banana"];
fruits3.unshift("Apple");
fruits3.push("Orange");
console.log(fruits3);

// ==============================
// slice()
// Purpose: Copies a portion of an array.
// Syntax : array.slice(start, end);
// Changes Original Array? No
// Returns: A new array containing the selected elements.
//Program-1
let fruits2 = ["Apple","Banana","Mango","Orange"];
console.log(fruits2.slice(2));
//Program-2
let array = [100, 200, 300, 400];
console.log(array.slice(0, 2));
//Program-3
let arr1 = [5, 10, 15, 20, 25];
console.log(arr1.slice(1, 4));
//Program-4
let arrayP = [100, 200, 300, 400];
console.log(arrayP.slice(0, 2));

// ==============================
// splice()
// Purpose: Adds, removes, or replaces elements in an array.
// Syntax : array.splice(start, deleteCount, item1, item2);
// Changes Original Array? Yes
// Returns: An array containing the removed elements.
//Program-1
let num = [10,20,30,40,50];
num.splice(1,2);
console.log(num);
//Program-2 Add banana after apple 
let fruitie = ["Apple", "Mango"];
fruitie.splice(1, 0, "Banana");
console.log(fruitie);
//Program-3
let fruits4 = ["Apple", "Banana", "Orange"];
fruits4.splice(2,1,"Kiwi");
console.log(fruits4);
//Program-4
let arr2 = ["A", "B", "C", "D"];
arr2.splice(2, 1);
console.log(arr2);
//Program-5
let arr3 = ["Pen", "Book"];
arr3.splice(1, 0, "Pencil");
console.log(arr3);
//Program-6
let arr4 = ["Cat", "Dog", "Fox"];
arr4.splice(1, 1, "Lion");
console.log(arr4);

// ==============================
// concat()
// Purpose: Combines two or more arrays.
// Syntax : array.concat(array2);
// Changes Original Array? No
// Returns: A new combined array.
//Example1
let phal = ["Apple", "Banana"];
let vegetables = ["Carrot", "Potato"];
let food = phal.concat(vegetables);
console.log(food);
//Example2
let array1 = [1, 2];
let array2 = [3, 4];
let array3 = [5, 6];
let result = array1.concat(array2, array3);
console.log(result);

// ==============================
// join()
// Purpose: Converts an array into a string.
// Syntax : array.join(separator);
// Changes Original Array? No
// Returns: A string.
//Example
let cars = ["Thar", "Nexon", "Safari"];
console.log(cars.join());         // Default separator (,)
console.log(cars.join(" "));      // Space separator
console.log(cars.join("-"));      // Hyphen separator
console.log(cars.join(""));       // No separator

// ==============================
// reverse()
// Purpose: Reverses the order of elements in an array.
// Syntax : array.reverse();
// Changes Original Array? Yes
// Returns: The same array in reversed order.
// Example 1
let numb = [1, 2, 3, 4];
numb.reverse();
console.log(numb);
//Example 2
let birds = ["crow", "parrot", "owl"];
birds.reverse();
console.log(birds);

// ==============================
// sort()
// Purpose: Sorts the elements of an array.
// Syntax: array.sort(); or array.sort((a, b) => a - b);
// Changes Original Array? Yes
// Returns: The same sorted array.
// Example 1: Sorting Strings (Alphabetical Order)
let fruitsx = ["Mango", "Apple", "Orange", "Banana"];
fruitsx.sort();
console.log(fruitsx);
// Example 2: Sorting Alphabets
let letters = ["D", "A", "C", "B"];
letters.sort();
console.log(letters);
// Example 3: Sorting Numbers (Default Behavior)
let numbers2 = [100, 5, 25, 8];
numbers2.sort();
console.log(numbers2);           // JavaScript compares numbers as strings by default.
// Example 4: Sorting Numbers (Ascending Order)
let ascending = [100, 5, 25, 8];
ascending.sort((a, b) => a - b);
console.log(ascending);
// Example 5: Sorting Numbers (Descending Order)
let descending = [100, 5, 25, 8];
descending.sort((a, b) => b - a);
console.log(descending);

// ==============================
// includes()
// Purpose: Checks whether an element exists in an array.
// Syntax : array.includes(element);
// Changes Original Array? No
// Returns: true or false (Boolean).
//Program-1 Check whether Firefox and safari exist ?
let browsers = ["Chrome", "Firefox", "Edge"];
console.log(browsers.includes("Firefox"));
console.log(browsers.includes("Safari"));
//Program-2
let colour = ["Red", "Green", "Blue"];
console.log(colour.includes("Green"));
console.log(colour.includes("Yellow"));
//Program-3
let fruiti = ["Apple", "Banana", "Mango"];
if (fruiti.includes("Banana")) {
    console.log("Fruiti Found");
} else {
    console.log("Fruiti Not Found");
}

// ==============================
// indexOf()
// Purpose: Finds the index of an element in an array.
// Syntax : array.indexOf(element);
// Changes Original Array? No
// Returns: Index of the element, or -1 if not found.
//Program-1 Print the index of python , javascript , c++
let languages = ["Java", "JavaScript", "Python", "TypeScript"];
console.log(languages.indexOf("Python"));
console.log(languages.indexOf("JavaScript"));
console.log(languages.indexOf("C++"));
//Program 2
let colours = ["Red", "Green", "Blue"];
console.log(colours.indexOf("Blue"));
console.log(colours.indexOf("Yellow"));

// ==============================
// Method: find()
// Purpose: Returns the first element that matches a condition.
// Syntax: array.find((element) => condition);
// Changes Original Array? No
// Returns: The first matching element or undefined if not found.
// Example 1
let num2 = [10, 20, 30, 40];
let result1 = num2.find((num2) => num2 > 25);
console.log(result1);
// Example 2
let lang = ["AWS","c++","Python","Java"];
let langs =lang.find((lang) => lang === "Python");
console.log(langs);
//Example 3
let digit = [2,4,6,8];
let output = digit.find((digit)=> digit > 10);
console.log(output);

// ==============================
// Method: filter()
// Purpose: Returns all elements that match a condition.
// Syntax: array.filter((element) => condition);
// Changes Original Array? No
// Returns: A new array containing all matching elements.
// Example 1
let count = [10, 20, 30, 40];
let results = counts.filter((count) => count > 25);
console.log(results);
// Example 2
let Num = [1,2,3,4,5,6,7,8];
let even = Num.filter((Num)=>Num % 2 === 0);
console.log(even);
// Example 3
let fruitP = ["Apple","banana","Mango","Orange"];
let odd = fruitP.filter((fruitP) => fruitP.includes("a"));
console.log(odd);
// Example 4 (combine)
let users = ["Priya","Rahul","Asish","Priya"];
let user = users.find((name) => name === "Priya");
let user2 = users.filter((name) => name === "Priya");
console.log(user , user2);

// ==============================
// Method: forEach()
// Purpose: Executes a function for every element in an array.
// Syntax: array.forEach((element) => { });
// Changes Original Array? No
// Returns: Undefined (does not return a new array).
// Example 1
let employees = ["Rahul", "Anita", "Karan"];
employees.forEach((employee) => {
    console.log(employee);
});
// Problem 1 :Print every color
let colors = ["Blue", "Black", "White"];
colors.forEach(color => {
    console.log(color);
});
// Problem 2 :Print each price with "₹" before it.
let prices = [120, 450, 780];
prices.forEach(function(price){
    console.log("₹" + price);
});
// Problem 3 :Print as 1. Chess 2. Football 3. Cricket
let games = ["Chess", "Football", "Cricket"];
games.forEach(function(game,index){
    console.log(index + 1 +". " + game);
});

// ==============================
// Method: map()
// Purpose: Creates a new array by modifying each element.
// Syntax: array.map((element) => expression);
// Changes Original Array? No
// Returns: A new array with modified elements.
// Example 1
let temperatures = [18, 24, 30];
let updated = temperatures.map((temp) => temp + 2);
console.log(updated);
// Problem 1 :Create a new array by adding 10 to every mark.
let marks = [68, 74, 89];
let addon = marks.map(function(mark){
    return mark + 10;
});
console.log(addon);
// Problem 2 :Convert them to uppercase.
let languages = ["javascript", "typescript", "python"];
let newLang = languages.map(function(lang){
     return lang.toUpperCase();
});
console.log(newLang);
// Problem 3 : Create new Array like this ["Department: QA","Department: Development","Department: HR"]
let departments = ["QA", "Development", "HR"];
let result = departments.map(function(department){
    return "Department: " + department;
});
console.log(result);

//Combine Example
// Problem  :Create forEach() → print every laptop with its index.
// Create using Map() → ["My Laptop: Asus","My Laptop: Lenovo","My Laptop: Dell","My Laptop: HP"]
let laptops = ["Asus", "Lenovo", "Dell", "HP"];
laptops.forEach(function(laptop, index) {
    console.log(index + 1 + ". " + laptop);
});
let myLaptops = laptops.map(function(laptop) {
    return "My Laptop: " + laptop;
});
console.log(myLaptops);

// ==============================
// Method: some()
// Purpose: Checks if at least one element satisfies a condition.
// Syntax: array.some((element) => condition);
// Changes Original Array? No
// Returns: true or false.
// Example 1
let courses = ["JavaScript", "SQL", "Playwright"];
let hasSQL = courses.some((course) => course === "SQL");
console.log(hasSQL);
////Problem 1 :Check whether "Japan" exists.?
let countries = ["India","Japan","Canada","Australia"];
let exists = countries.some(function(country){
    return country === "Japan";
});
console.log(exists);
//Problem 2 :Check any rating is greater than 4.5 ?
let ratings = [3.8, 4.2, 4.6, 3.9];
let greater = ratings.some(function(rating){
    return rating > 4.5;
});
console.log(greater);
//Problem 3 :Check if Safari Exist ?
let browsers = ["Chrome","Firefox","Edge"];
let hasSafari = browsers.some(function(browser){
    return browser === "Safari";
});
console.log(hasSafari);
//Problem 4 :Check whether any salary is greater than 50000 ?
let salaries = [25000, 32000, 48000, 51000];
let max = salaries.some(function(salary){
    return salary > 50000;
});
console.log(max);
//Problem 5 :Use some() to check whether "Selenium" exists ?
let skills = ["JavaScript","SQL","Playwright","Postman"];
let available = skills.some(function(skill){
    return skill === "Selenium";
});
console.log(available);

// ==============================
// Method: every()
// Purpose: Checks if all elements satisfy a condition.
// Syntax: array.every((element) => condition);
// Changes Original Array? No
// Returns: true or false.
// Example 1
let ages = [22, 28, 31, 25];
let allAdults = ages.every((age) => age >= 18);
console.log(allAdults);
// Problem 1 : Check whether all temperatures are above 25.
let temperatures = [28, 31, 35, 30];
let maxTemp = temperatures.every(function(temp){
    return temp > 25;
});
console.log(maxTemp);
//problem 2 : Check whether all employees have at least 2 years of experience.
let experience = [3, 5, 2, 6];
let atleast = experience.every(function(years){
    return years >= 2;
});
console.log(atleast);
//Problem 3 : Check whether every browser name has more than 4 letters.
let browsers = ["Chrome","Firefox","Edge"];
let longNames = browsers.every(function(browser){
    return browser.length > 4;
});
console.log(longNames);
//Problem 4 : Check whether every rating is greater than 4.
let ratings = [4.8, 4.6, 3.9, 4.7];
let greaterThan = ratings.every(function(rating){
    return rating > 4;
});
console.log(greaterThan);
//Problem 5 : Check whether every technology name has at least 3 characters.
let technologies = ["JavaScript","Playwright","SQL","Postman"];
let letter = technologies.every(function(technology){
    return technology.length >= 3;
});
console.log(letter);

// ==============================
// Method: reduce()
// Purpose: Reduces all array elements into a single value.
// Syntax: array.reduce((accumulator, element) => operation, initialValue);
// Changes Original Array? No
// Returns: A single value (number, string, object, etc.).
// Example 1
let expenses = [500, 1200, 800];
let total = expenses.reduce((accumulator, expense) => accumulator + expense, 0);
console.log(total);
//Problem 1:find total mark ?
let marks = [85, 90, 78, 92];
let total = marks.reduce(function(accumulator,mark){
    return accumulator + mark;
},0);
console.log(total);
//Problem 2:find total age ?
let ages = [20, 22, 25];
let totalAge = ages.reduce(function(accumulator,age){
    return accumulator + age;
},0);
console.log(totalAge);
//Problem 3:find total distance ?
let distances = [120, 250, 80];
let totalDistance = distances.reduce(function(accumulator,distance){
    return accumulator + distance;
},0);
console.log(totalDistance);
//Problem 4:find the product of all quantities ?
let quantities = [5, 10, 2];
let all = quantities.reduce(function(accumulator,quantity){
    return accumulator * quantity;
}, 1);
console.log(all);
//Problem 4:calculate the total number of characters in all names.
let names = ["Priya","Rohan","Anjali"];
let totalNum = names.reduce(function(accumulator,name){
    return accumulator + name.length;
},0);
console.log(totalNum);
