// Map: تبدیل هر عنصر
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]

// Reduce: محاسبه نتیجه نهایی
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10

// مقایسه مستقیم
const products = [
  { name: 'Laptop', price: 1000 },
  { name: 'Phone', price: 500 },
  { name: 'Tablet', price: 300 }
];

// Map: فقط قیمت‌ها
const prices = products.map(product => product.price);
console.log(prices); // [1000, 500, 300]

// Reduce: جمع قیمت‌ها
const total = products.reduce((sum, product) => sum + product.price, 0);
console.log(total); // 1800

// ترکیب Map و Reduce
const numbers2 = [1, 2, 3, 4];
const sumSquares = numbers2
  .map(num => num * num)
  .reduce((acc, squared) => acc + squared, 0);
console.log(sumSquares); // 30