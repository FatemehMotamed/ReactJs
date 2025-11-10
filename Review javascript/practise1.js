// بخش ۱: توابع پایه (همون قبلی)
function checkInventory(productId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const inventory = {
        '001': { name: 'لپ‌تاپ', stock: 5 },
        '002': { name: 'موبایل', stock: 0 },
        '003': { name: 'تبلت', stock: 3 }
      };
      
      const product = inventory[productId];
      if (product && product.stock > 0) {
        resolve(` موجودی ${product.name} کافی است (${product.stock} عدد)`);
      } else {
        reject(` موجودی محصول کافی نیست!`);
      }
    }, 1000);
  });
}

function processPayment(amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = amount <= 1000;
      if (success) {
        resolve(` پرداخت ${amount} تومان موفقیت‌آمیز بود`);
      } else {
        reject(` پرداخت ${amount} تومان ناموفق بود!`);
      }
    }, 1500);
  });
}

function sendConfirmation(email) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(` ایمیل تایید به ${email} ارسال شد`);
    }, 500);
  });
}

// بخش ۲: راه‌حل تابع placeOrder
function placeOrder(productId, amount, email) {
  return checkInventory(productId)
    .then(inventoryResult => {
      console.log(inventoryResult);
      return processPayment(amount);
    })
    .then(paymentResult => {
      console.log(paymentResult);
      return sendConfirmation(email);
    })
    .then(confirmationResult => {
      console.log(confirmationResult);
      return ' سفارش با موفقیت تکمیل شد!';
    })
    .catch(error => {
      throw new Error(`خطا در سفارش: ${error}`);
    });
}

// راه‌حل جایگزین با async/await
async function placeOrderAsync(productId, amount, email) {
  try {
    const inventoryResult = await checkInventory(productId);
    console.log(inventoryResult);
    
    const paymentResult = await processPayment(amount);
    console.log(paymentResult);
    
    const confirmationResult = await sendConfirmation(email);
    console.log(confirmationResult);
    
    return ' سفارش با موفقیت تکمیل شد!';
  } catch (error) {
    throw new Error(`خطا در سفارش: ${error}`);
  }
}

// بخش ۳: تست سیستم
console.log('=== تست سیستم مدیریت سفارش ===');

// تست ۱: سفارش موفق
placeOrder('001', 500, 'customer1@example.com')
  .then(result => console.log('نتیجه نهایی:', result))
  .catch(error => console.log('خطا:', error));

// تست ۲: موجودی ناکافی
placeOrder('002', 300, 'customer2@example.com')
  .then(result => console.log('نتیجه نهایی:', result))
  .catch(error => console.log('خطا:', error));

// تست ۳: پرداخت ناموفق
placeOrder('003', 1500, 'customer3@example.com')
  .then(result => console.log('نتیجه نهایی:', result))
  .catch(error => console.log('خطا:', error));