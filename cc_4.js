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
    name: "Cameron Watts",
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
function calculateTax(amount, taxRate) {
    let tax = amount * (taxRate / 100);
    return tax;
}
let amount = 150; //set amount and tax rate
let taxRate = 8;
let tax = calculateTax(amount, taxRate);
console.log(`Tax on $${amount} at a rate of ${taxRate}% is $${tax}.`); 
