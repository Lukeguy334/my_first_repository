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
