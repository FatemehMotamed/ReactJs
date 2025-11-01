// ۱. جمع کردن اعداد
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(sum); // 15

// ۲. شمارش تکرار عناصر
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'banana'];
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(count); // { apple: 2, banana: 3, orange: 1 }

// ۳. گروه‌بندی اشیاء بر اساس ویژگی
const students = [
  { name: 'Ali', grade: 'A' },
  { name: 'Sara', grade: 'B' },
  { name: 'Reza', grade: 'A' },
  { name: 'Maryam', grade: 'C' }
];
const grouped = students.reduce((acc, student) => {
  const grade = student.grade;
  if (!acc[grade]) {
    acc[grade] = [];
  }
  acc[grade].push(student);
  return acc;
}, {});
console.log(grouped);

// ۴. پیدا کردن بیشترین مقدار
const numbers2 = [10, 5, 25, 8, 30, 15];
const max = numbers2.reduce((acc, current) => {
  return current > acc ? current : acc;
}, numbers2[0]);
console.log(max); // 30

// ۵. حذف مقادیر تکراری
const numbers3 = [1, 2, 2, 3, 4, 4, 5, 1];
const unique = numbers3.reduce((acc, current) => {
  if (!acc.includes(current)) {
    acc.push(current);
  }
  return acc;
}, []);
console.log(unique); // [1, 2, 3, 4, 5]

// ۶. تبدیل آرایه به شیء
const keyValuePairs = [
  ['name', 'Ali'],
  ['age', 25],
  ['city', 'Tehran']
];
const obj = keyValuePairs.reduce((acc, [key, value]) => {
  acc[key] = value;
  return acc;
}, {});
console.log(obj); // { name: 'Ali', age: 25, city: 'Tehran' }

// ۷. محاسبه میانگین
const scores = [85, 90, 78, 92, 88];
const average = scores.reduce((acc, score, index, array) => {
  acc += score;
  if (index === array.length - 1) {
    return acc / array.length;
  }
  return acc;
}, 0);
console.log(average); // 86.6

// ۸. مسطح کردن آرایه‌های تو در تو
const nestedArrays = [[1, 2], [3, 4], [5, [6, 7]]];
const flatten = nestedArrays.reduce((acc, current) => {
  return acc.concat(current.flat());
}, []);
console.log(flatten); // [1, 2, 3, 4, 5, 6, 7]

// ۹. ترکیب با map و filter
const products = [
  { name: 'Laptop', price: 1000, category: 'electronics' },
  { name: 'Phone', price: 500, category: 'electronics' },
  { name: 'Book', price: 20, category: 'education' },
  { name: 'Chair', price: 150, category: 'furniture' }
];
const totalElectronicsPrice = products
  .filter(product => product.category === 'electronics')
  .reduce((acc, product) => acc + product.price, 0);
console.log(totalElectronicsPrice); // 1500