

async function logJSONData() {
    const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=test&maxResults=5&key=AIzaSyD0kfX1gVi9NATkHXSkfYYuf2pwOes1C_U");
    const jsonData = await response.json();
    console.log(jsonData);
  }
  logJSONData();
  