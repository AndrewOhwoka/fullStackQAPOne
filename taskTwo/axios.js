// Import the axios module
const axios = require("axios");

// Function to make a GET request
async function getRequest(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

// Function to handle the response
function handleResponse(data) {
  console.log("Response data:", data);
}

// Define the URL for the GET request
const url = "https://jsonplaceholder.typicode.com/posts/1";

// Make the GET request and handle the response
getRequest(url).then(handleResponse);
