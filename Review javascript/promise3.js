// Promise.all - اجرای همزمان چند Promise
const promise1 = Promise.resolve(10);
const promise2 = new Promise(resolve => {
  setTimeout(() => resolve(20), 1000);
});
const promise3 = fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json());

console.log("شروع Promise.all...");

Promise.all([promise1, promise2, promise3])
  .then(results => {
    console.log("همه Promiseها با موفقیت انجام شدند:");
    console.log("نتیجه اول:", results[0]); // 10
    console.log("نتیجه دوم:", results[1]); // 20
    console.log("نتیجه سوم:", results[2]); // داده از API
  })
  .catch(error => {
    console.error("یکی از Promiseها با خطا مواجه شد:", error);
  });

// Promise.race - اولین Promise که resolve شود
const fastPromise = new Promise(resolve => {
  setTimeout(() => resolve("عملیات سریع!"), 500);
});

const slowPromise = new Promise(resolve => {
  setTimeout(() => resolve("عملیات کند!"), 2000);
});

console.log("شروع Promise.race...");

Promise.race([fastPromise, slowPromise])
  .then(result => {
    console.log("نتیجه اولین عملیات:", result); // "عملیات سریع!"
  });