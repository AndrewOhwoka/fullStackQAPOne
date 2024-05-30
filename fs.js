const fs = require("fs");

// Function to write a file
function writeFile(filename, content, callback) {
  fs.writeFile(filename, content, (err) => {
    if (err) {
      console.error("Error writing file", err);
      return;
    }
    console.log("File has been written");
    callback();
  });
}

// Function to read a file
function readFile(filename, callback) {
  fs.readFile(filename, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file", err);
      return;
    }
    console.log("File content:", data);
    callback();
  });
}

// Function to delete a file
function deleteFile(filename) {
  fs.unlink(filename, (err) => {
    if (err) {
      console.error("Error deleting file", err);
      return;
    }
    console.log("File deleted");
  });
}

// Use the functions
writeFile("sample.txt", "Hello, Node.js!", () => {
  readFile("sample.txt", () => {
    deleteFile("sample.txt");
  });
});
