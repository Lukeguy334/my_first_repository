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
