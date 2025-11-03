function getNumber() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(10), 1000);
  });
}

function multiplyByTwo(number) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(number * 2), 1000);
  });
}

function addFive(number) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(number + 5), 1000);
  });
}

// زنجیره‌ای کردن
getNumber()
  .then(number => {
    console.log("عدد اولیه:", number);
    return multiplyByTwo(number);
  })
  .then(result => {
    console.log("بعد از ضرب در 2:", result);
    return addFive(result);
  })
  .then(finalResult => {
    console.log("نتیجه نهایی:", finalResult);
  })
  .catch(error => {
    console.error("خطا:", error);
  });