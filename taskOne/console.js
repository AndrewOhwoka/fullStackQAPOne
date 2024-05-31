// console_example.js

// Use console.log to print a general message
console.log("This is a general log message.");

// Use console.error to print an error message
console.error("This is an error message.");

// Use console.warn to print a warning message
console.warn("This is a warning message.");

// Use console.info to print an informational message
console.info("This is an informational message.");

// Use console.table to print a table of data
const students = [
  { name: "Alice", age: 23 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 24 },
];
console.table(students);

// Use console.time and console.timeEnd to measure the time taken by a block of code
console.time("loop");
for (let i = 0; i < 1000000; i++) {
  // some loop doing work
}
console.timeEnd("loop");

// Use console.assert to print a message if an assertion is false
const x = 5;
console.assert(x === 10, "x is not 10"); // This will print because the assertion is false
