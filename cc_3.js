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

