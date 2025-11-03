async function processUsers(userIds) {
  const results = [];
  
  for (const userId of userIds) {
    try {
      console.log(`Fetching user ${userId}...`);
      
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      
      if (!response.ok) {
        throw new Error(`User ${userId} not found`);
      }
      
      const user = await response.json();
      results.push(user);
      
    } catch (error) {
      console.error(`Failed to fetch user ${userId}:`, error.message);
      results.push(null);
    }
    
    // تاخیر بین درخواست‌ها
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  return results;
}

// اجرای مثال
async function main() {
  const userIds = [1, 2, 3, 999, 4]; // 999 خطا می‌دهد
  const users = await processUsers(userIds);
  
  console.log('Final results:');
  users.forEach((user, index) => {
    console.log(`User ${userIds[index]}:`, user ? user.name : 'Not found');
  });
}

main();