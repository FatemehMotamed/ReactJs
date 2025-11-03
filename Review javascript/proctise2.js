// تابعی که Promise برمی‌گرداند
function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = {
        1: { name: "علی", age: 25 },
        2: { name: "مریم", age: 30 }
      };
      
      const user = users[userId];
      if (user) {
        resolve(user);
      } else {
        reject("کاربر یافت نشد!");
      }
    }, 1000);
  });
}

// استفاده با async/await
async function getUserInfo(userId) {
  try {
    console.log("در حال دریافت اطلاعات کاربر...");
    
    const user = await fetchUserData(userId);
    console.log("اطلاعات کاربر:", user);
    
    return user;
    
  } catch (error) {
    console.error("خطا در دریافت اطلاعات:", error);
    throw error; // پرتاب خطا برای مدیریت بالاتر
  }
}

// اجرا
getUserInfo(1)
  .then(user => console.log("نتیجه نهایی:", user))
  .catch(error => console.error("خطای نهایی:", error));