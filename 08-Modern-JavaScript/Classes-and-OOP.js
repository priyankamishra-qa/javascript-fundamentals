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
let bug10 = new Bug("Login button not working", "Open");
console.log(bug10.status);
bug10.updateStatus("Fixed");
console.log(bug10.status);
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

let test1x = new TestCase(
    "Login Test",
    "High",
    "Passed"
);
test1x.showDetails();
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

// Getters and Setters
// 1. Getter -A getter is used to read/access a property value.// It is accessed like a normal property, without ().
class TestCaseX {
    constructor(name, status) {
        this.name = name;
        this.status = status;
    }

    get testName() {
        return this.name;
    }
}
let test1 = new TestCaseX("Login Test", "Passed");
console.log(test1.testName);

// 2. Getter - QA Example
class TestCaseResult {
    constructor(name, status) {
        this.name = name;
        this.status = status;
    }

    get result() {
        return this.status;
    }
}
let loginTest = new TestCaseResult("Login Test", "Passed");
console.log(loginTest.result);

// 3. Setter - A setter is used to update/change a property value.// It is also used like a normal property, without ().
class TestCaseStatus {
    constructor(name, status) {
        this.name = name;
        this.status = status;
    }

    set updateStatus(newStatus) {
        this.status = newStatus;
    }
}
let test2 = new TestCaseStatus("Payment Test", "Failed");
test2.updateStatus = "Passed";
console.log(test2.status);

// 4. Setter with Validation -A setter can validate data before updating the property.
class ValidatedTestCase {
    constructor(name, status) {
        this.name = name;
        this.status = status;
    }
    set updateStatus(newStatus) {
        if (
            newStatus === "Passed" ||
            newStatus === "Failed" ||
            newStatus === "Blocked"
        ) {
            this.status = newStatus;
        } else {
            console.log("Invalid status");
        }
    }
}
let test3 = new ValidatedTestCase("Checkout Test", "Not Executed");
test3.updateStatus = "Passed";
console.log(test3.status);
test3.updateStatus = "Completed";

// 5. Getter + Setter Together
class TestCaseStatusManager {
    constructor(name, status) {
        this.name = name;
        this.status = status;
    }

    get testStatus() {
        return this.status;
    }

    set testStatus(newStatus) {
        if (
            newStatus === "Passed" ||
            newStatus === "Failed" ||
            newStatus === "Blocked"
        ) {
            this.status = newStatus;
        } else {
            console.log("Invalid test status");
        }
    }
}
let test4 = new TestCaseStatusManager("Login Test", "Not Executed");
console.log(test4.testStatus);
test4.testStatus = "Passed";
console.log(test4.testStatus);
test4.testStatus = "Completed";
console.log(test4.testStatus);

// 6. QA Example - Bug Getter and Setter
class BugX {
    constructor(title, status) {
        this.title = title;
        this.status = status;
    }

    get bugStatus() {
        return this.status;
    }

    set bugStatus(newStatus) {
        if (
            newStatus === "Open" ||
            newStatus === "Fixed" ||
            newStatus === "Closed"
        ) {
            this.status = newStatus;
        } else {
            console.log("Invalid bug status");
        }
    }
}
let bug1 = new BugX("Login button not working", "Open");
console.log(bug1.bugStatus);
bug1.bugStatus = "Fixed";
console.log(bug1.bugStatus);

// Key Points:
// Getter → reads a value
// Setter → updates a value
// get → accessed like a property
// set → assigned like a property
// Setter can validate data before updating it