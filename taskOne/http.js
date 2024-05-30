const http = require("http");

const PORT = process.env.PORT || 3000;

// Function to handle requests
function handleRequest(req, res) {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, { "Content-Type": "text/plain" });
  // Send the response body "Hello World"
  res.end("Hello World\n");
}

// Function to handle server listening event
function handleListening() {
  console.log(`Server running at ${PORT}`);
}

// Function to handle server errors
function handleError(error) {
  console.error("Server error: ", error);
}

// Create a local server to receive requests
const server = http.createServer(handleRequest);

// The server listens on port 3000
server.listen(PORT, handleListening);

server.on("error", handleError);
