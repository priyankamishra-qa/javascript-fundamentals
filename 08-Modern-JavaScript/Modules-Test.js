// JavaScript Modules - Import

import getUser, {
    add,
    login,
    logout,
    getStatus,
    validateStatus,
    baseURL,
    environment,
    browser
} from "./Modules.js";

console.log(add(10, 20));
console.log(login());
console.log(logout());
console.log(getStatus());
console.log(getUser());
console.log(validateStatus(200));
console.log(baseURL);
console.log(environment);
console.log(browser);