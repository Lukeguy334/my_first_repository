// Customer Discounts
let purchaseAmount = 150;
if (purchaseAmount > 100) {
    purchaseAmount -= 10; // $10 discount
}
console.log("Final Purchase Amount:", purchaseAmount);


// calculate sales
let sales = [50, 75, 100, 125, 150];
let totalSales = 0
for (let i = 0; i < sales.length; i++) { // calculating total sales
    totalSales += sales[i];
}
console.log("Updated Sales:", sales);
console.log("Total Sales:", totalSales); // 500

let stock = 10;
while (stock > 0) { // decrease stock
    console.log(`Stock Remaining: ${stock}`);
    stock--;
}
console.log("Out of Stock!"); // Out of Stock!

// Customer survey
let responses = 0
do {
    console.log(`Survey Responses: ${responses}`);
    responses++;
} while (responses <3);
console.log("Survey Complete!"); // Survey Complete!

//employee information
let employee = {
    name: "Kendrick Roseburr",
    role: "Manager",
    salary: 100000
};
for (let key in employee) {
    console.log(`${key}: ${employee[key]}`); // print employee info
    }

// Product listings
let products = ["Laptop", "Tablet", "Smartphone", "Smartwatch"];
for (let product of products) {
    console.log(`Product: ${product}`); // print product
}

// Order tracking
let orders = [101, 102, 103, 104, 105];
orders.forEach(order => {
    console.log(`Order Number: ${order}`); // print order number
});

// Calculate Tax
function calculateTax(taxamount, taxRate) {
    let tax = taxamount * (taxRate / 100);
    return tax;
}
let taxamount = 150; //set amount and tax rate
let taxRate = 8;
let tax = calculateTax(taxamount, taxRate);
console.log(`Tax on $${taxamount} at a rate of ${taxRate}% is $${tax}.`); 

// Discount Application
function applyDiscount(price, discount) {
    let newPrice = price - (price * (discount / 100));
    return newPrice;
}
console.log(`Price after 20% discount: $${applyDiscount(100, 20)}`); // Price after 20% discount: $80

// Loyalty Points
const calculatePoints = (pointAmount) => {
    return Math.floor(pointAmount / 10); // 1 point for every $10
};
let pointAmount = 135; // set pointAmount
let points = calculatePoints(pointAmount);
console.log(`Customer earned ${points} points for a purchase of $${pointAmount}.`); // Customer earned 13 points for a purchase of $135.
