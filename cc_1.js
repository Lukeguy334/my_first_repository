let employeeName = "John Doe";
const employeeID = 12345
var isActive = true;

console.log("John Doe", employeeName, "| Type;", typeof employeeName);
console.log("12345", employeeID, "| Type;", typeof employeeID);
console.log("true", isActive, "| Type;", typeof isActive);

let productName = "Wireless Headphones";
const productPrice = 59.99;
var isAvalible = true;

console.log("Wireless Headphones", productName, "| Type;", typeof productName);
console.log("59.99", productPrice, "| Type;", typeof productPrice);
console.log("true", isAvalible, "| Type;", typeof isAvalible);

let accountBalance = 1000;
accountBalance += 500;
console.log("After deposit: $" + accountBalance);
accountBalance -=200;
console.log("After withdrawal: $" + accountBalance);
accountBalance *= 1.05;
console.log("After interest: $" + accountBalance.toFixed(2));
accountBalance /=2;
console.log("After half: $" + accountBalance.toFixed(2));

let customerName = "Jane Doe";
let welcomeMessage = "Welcome, " + customerName + "!";
console.log(welcomeMessage);

let isLoggedIn = true;
let userRole = "Admin";
if (isLoggedIn) {
    console.log("Welcome, " + userRole);
} else {
    console.log("Please log in");
}
if (isLoggedIn && userRole === "Admin") {
    console.log("Welcome, Admin");
} else {
    console.log("Please log in");
}
if (!isLoggedIn) {
    console.log("Please log in");
} else (userRole === "Admin") 
    console.log("Welcome, Admin");
