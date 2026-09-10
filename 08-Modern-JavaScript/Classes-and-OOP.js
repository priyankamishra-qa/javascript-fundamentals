// CLASSES & OBJECT-ORIENTED JAVASCRIPT
// 1. this inside an object
let employee = {
    name: "Priya",
    role: "QA Engineer",

    showDetails: function() {
        console.log(this.name);
        console.log(this.role);
    }
};
employee.showDetails();

// ------------------------------------------------------------
// 2. Detaching a method
let employeeDetails = {
    name: "Priya",

    showName: function() {
        console.log(this.name);
    }
};
employeeDetails.showName();
let show = employeeDetails.showName;
// show(); // this no longer refers to employeeDetails
// ------------------------------------------------------------
// 3. Regular function vs Arrow function - this
let tester = {
    name: "Priya",

    regularFunction: function() {
        console.log(this.name);
    },

    arrowFunction: () => {
        console.log(this.name);
    }
};
tester.regularFunction();
// tester.arrowFunction(); // arrow function does not get its own this
// ------------------------------------------------------------
// 4. this in a QA object
let testCase = {
    name: "Login Test",
    status: "Passed",

    showResult: function() {
        console.log(this.name);
        console.log(this.status);
    }
};
testCase.showResult();

// ============================================================
// CLASSES
// 5. Basic Class with this

class Tester {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }
    showDetails() {
        console.log(this.name);
        console.log(this.role);
    }
}
let tester1 = new Tester("Priya", "QA Engineer");
tester1.showDetails();

// ------------------------------------------------------------
// 6. Constructor
class Employee {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }
}
let employee1 = new Employee("Priya", "QA Engineer");
console.log(employee1.name);
console.log(employee1.role);

// ------------------------------------------------------------
// 7. Class Methods
class Test {
    constructor(name) {
        this.name = name;
    }
    runTest() {
        console.log(this.name + " is running");
    }
}
let test = new Test("Login Test");
test.runTest();
// ------------------------------------------------------------
// 8. Creating Multiple Objects from One Class
class QAEngineer {
    constructor(name, tool) {
        this.name = name;
        this.tool = tool;
    }
    showDetails() {
        console.log(this.name);
        console.log(this.tool);
    }
}
let qa1 = new QAEngineer("Priya", "Selenium");
let qa2 = new QAEngineer("Rahul", "Playwright");
qa1.showDetails();
qa2.showDetails();
// ------------------------------------------------------------
// 9. new Keyword
class Developer {
    constructor(name) {
        this.name = name;
    }
}
let developer1 = new Developer("Amit");
console.log(developer1.name);
// 10. Class Properties and Default Values
class TestCaseDetails {
    constructor(name, priority) {
        this.name = name;
        this.priority = priority;
        this.status = "Not Executed";
    }
}
let testCase1 = new TestCaseDetails("Login Test", "High");
console.log(testCase1.name);
console.log(testCase1.priority);
console.log(testCase1.status);
// ------------------------------------------------------------
// 11. Updating Object Properties
testCase1.status = "Passed";
console.log(testCase1.status);
// ------------------------------------------------------------
// 12. Method Modifying a Property
class Bug {
    constructor(title, status) {
        this.title = title;
        this.status = status;
    }
    updateStatus(newStatus) {
        this.status = newStatus;
    }
}
let bug1 = new Bug("Login button not working", "Open");
console.log(bug1.status);
bug1.updateStatus("Fixed");
console.log(bug1.status);
// ============================================================
// INHERITANCE
// 13. extends - Basic Inheritance
class BaseEmployee {
    constructor(name) {
        this.name = name;
    }
    introduce() {
        console.log("My name is " + this.name);
    }
}
class ManualTester extends BaseEmployee {
}
let manualTester1 = new ManualTester("Priya");
manualTester1.introduce();
// ------------------------------------------------------------
// 14. Child Class with Its Own Method
class AutomationTester extends BaseEmployee {

    runAutomation() {
        console.log(this.name + " is running automation tests");
    }
}
let automationTester1 = new AutomationTester("Priya");
automationTester1.introduce();
automationTester1.runAutomation();

// 15. super() in Child Constructor
class TesterParent {
    constructor(name) {
        this.name = name;
    }
}
class AutomationTesterChild extends TesterParent {
    constructor(name, tool) {
        super(name);
        this.tool = tool;
    }
}
let automationTester2 = new AutomationTesterChild(
    "Priya",
    "Selenium"
);
console.log(automationTester2.name);
console.log(automationTester2.tool);

// 16. Method Overriding
class ParentEmployee {

    work() {
        console.log("Employee is working");
    }
}
class ChildTester extends ParentEmployee {

    work() {
        console.log("Tester is testing");
    }
}
let childTester1 = new ChildTester();
childTester1.work();
// ------------------------------------------------------------
// 17. super.method()
class EmployeeWork {

    work() {
        console.log("Employee is working");
    }
}
class QAEngineerChild extends EmployeeWork {

    work() {
        super.work();
        console.log("QA Engineer is testing");
    }
}
let qaEngineer1 = new QAEngineerChild();
qaEngineer1.work();
// ------------------------------------------------------------
// 18. TestCase Class
class TestCase {

    constructor(name, priority, status) {
        this.name = name;
        this.priority = priority;
        this.status = status;
    }

    showDetails() {
        console.log(this.name);
        console.log(this.priority);
        console.log(this.status);
    }
}

let test1 = new TestCase(
    "Login Test",
    "High",
    "Passed"
);
test1.showDetails();
// ------------------------------------------------------------
// 19. AutomationTest - Inheritance
class AutomationTest extends TestCase {

    constructor(name, priority, status, tool) {
        super(name, priority, status);
        this.tool = tool;
    }
    showAutomationDetails() {
        console.log(this.name);
        console.log(this.priority);
        console.log(this.status);
        console.log(this.tool);
    }
}
let automationTest1 = new AutomationTest(
    "Checkout Test",
    "High",
    "Passed",
    "Selenium"
);
automationTest1.showAutomationDetails();
// ------------------------------------------------------------
// 20. Method Overriding + super.method()
class AutomatedTestCase extends TestCase {

    constructor(name, priority, status, tool) {
        super(name, priority, status);
        this.tool = tool;
    }

    showDetails() {
        super.showDetails();
        console.log("Tool : " + this.tool);
    }
}
let automatedTest1 = new AutomatedTestCase(
    "Payment Test",
    "Critical",
    "Passed",
    "Playwright"
);
automatedTest1.showDetails();
