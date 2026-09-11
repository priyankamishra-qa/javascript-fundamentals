// Static Methods and Static Properties - Additional Examples
// Static Methods and Properties
// 1. Basic Static Method
class Tester {
    static showMessage() {
        console.log("Testing started");
    }
}
Tester.showMessage();

// 2. Static Method with Return
class TestUtility {
    static getStatus() {
        return "Passed";
    }
}
console.log(TestUtility.getStatus());

// 3. Static Method with Parameters
class MathUtility {
    static addNumbers(a, b) {
        return a + b;
    }
}
console.log(MathUtility.addNumbers(10, 20));

// 4. Static Method with Condition
class ResultUtility {
    static getResult(status) {
        if (status === "Passed") {
            return "Test Successful";
        } else {
            return "Test Failed";
        }
    }
}
console.log(ResultUtility.getResult("Passed"));
console.log(ResultUtility.getResult("Failed"));

// 5. QA/API Static Method
class APIUtility {
    static isSuccess(statusCode) {
        return statusCode >= 200 && statusCode < 300;
    }
}
console.log(APIUtility.isSuccess(200));
console.log(APIUtility.isSuccess(201));
console.log(APIUtility.isSuccess(404));
console.log(APIUtility.isSuccess(500));

// 6. Instance Method vs Static Method
class TestCase {
    constructor(name) {
        this.name = name;
    }

    run() {
        console.log(this.name + " executed");
    }

    static framework() {
        return "Playwright";
    }
}
let test1 = new TestCase("Login Test");
test1.run();
console.log(TestCase.framework());

// 7. Basic Static Property
class BrowserConfig {
    static browser = "Chrome";
}
console.log(BrowserConfig.browser);

// 8. Multiple Static Properties
class TestConfig {
    static environment = "QA";
    static browser = "Chrome";
}
console.log(TestConfig.environment);
console.log(TestConfig.browser);

// 9. Static Properties with Static Method
class EnvironmentConfig {
    static environment = "QA";
    static baseURL = "https://qa.example.com";

    static showConfig() {
        console.log("Environment:", EnvironmentConfig.environment);
        console.log("Base URL:", EnvironmentConfig.baseURL);
    }
}
EnvironmentConfig.showConfig();

// 10. Modify Static Property
class DeploymentConfig {
    static environment = "QA";
}
console.log(DeploymentConfig.environment);
DeploymentConfig.environment = "Production";
console.log(DeploymentConfig.environment);

// 11. Static Method Modifying Static Property
class BrowserConfigManager {
    static browser = "Chrome";

    static changeBrowser(newBrowser) {
        BrowserConfigManager.browser = newBrowser;
    }
}
console.log(BrowserConfigManager.browser);
BrowserConfigManager.changeBrowser("Firefox");
console.log(BrowserConfigManager.browser);