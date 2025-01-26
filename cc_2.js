let products = ["Wireless Headphones", "Smartphone", "Laptop", "Tablet", "Smartwatch"];
products.push("Smart TV");
products.pop();
console.log("Updated Product List", products);

let scores = [85, 90, 78, 92, 88];
scores[1] = 95;
let total = 0;
for (let i = 0; i < scores.length; i++) {
    total += scores[i];
}
let average = total / scores.length;
console.log("Updated Scores:", scores);
console.log("Average Score:", average.toFixed(2));

let employee = {
    name: "John Doe",
    age: 35,
    department: "IT",
    isActive: true
};
employee.department = "HR";
employee.position = "Manager";
console.log("Updated Employee Record:", employee);

