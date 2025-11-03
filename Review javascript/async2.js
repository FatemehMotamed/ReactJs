// شبیه‌سازی تاخیر
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function processOrder(orderId) {
  try {
    console.log(`Processing order ${orderId}...`);
    
    // مرحله ۱: بررسی موجودی
    await delay(1000);
    console.log('Inventory checked');
    
    // مرحله ۲: پردازش پرداخت
    await delay(1500);
    if (Math.random() > 0.2) {
      console.log('Payment processed successfully');
    } else {
      throw new Error('Payment failed');
    }
    
    // مرحله ۳: ارسال سفارش
    await delay(2000);
    console.log('Order shipped');
    
    return `Order ${orderId} completed successfully`;
    
  } catch (error) {
    console.error(`Order ${orderId} failed:`, error.message);
    throw error; // پرتاب مجدد خطا
  }
}

// استفاده از تابع
async function runOrderProcessing() {
  try {
    const result = await processOrder(123);
    console.log('Final result:', result);
  } catch (error) {
    console.log('Main function caught error:', error.message);
  }
}

runOrderProcessing();