// setting prices
let Prices = [25, 30, 35, 45, 60];
Prices.push(70); // add new price to array
Prices.shift(); // remove price from array
console.log("Updated Prices", Prices);

// setting & altering stock
let Instock = [10, 15, 20, 30, 40];
Instock [3] +=5; // add 5 to stock
let totalStock = Instock.reduce((sum, num) => sum + num, 0);
console.log("Updated Stock:", Instock);
console.log("Total Stock:", totalStock); // total stock 120


// employee tracking data
let employee = {
    name: "Helen Lachapelle",
    role: "Manager",
    performanceScore: 96,
    isActive: true
};
employee.performanceScore = 98; // update performance score
employee.isTerminated = false; // add boolean to employee record
console.log("Updated Employee Record:", employee);

// customer database
let feedback = [
    {customerName: "Helen Lachapelle", feedbackText: "Great job!", rating: 9},
    {customerName: "Wyatt Lachapelle", feedbackText: "Needs improvement.", rating: 6},
    {customerName: "Sterling Silva", feedbackText: "Excellent work!", rating: 8}
];
// add new feedback to database
feedback.push = {customerName: "Lucas Silva", feedbackText: "Very satisfied.", rating: 10};
console.log("Customer Feedback:", feedback);

// logging inventory
let inventory = {
    itemName: "Wireless Headphones",
    stockCount: 25,
    price: 50,
};
inventory.calculateTotalValue = function () {
    return this.stockCount * this.price;
};
console.log("Total Inventory Value:", inventory.calculateTotalValue()); // 1250
console.log("Inventory Record:", inventory);
