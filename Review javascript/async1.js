// تابع async پایه
async function fetchUserData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await response.json();
    console.log('User data:', user);
    return user;
  } catch (error) {
    console.error('Error fetching user:', error);
  }
}

// استفاده از تابع
fetchUserData();