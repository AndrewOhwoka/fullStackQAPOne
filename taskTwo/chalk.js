// Function to log a blue message
async function logBlue(message) {
  const chalk = await import("chalk");
  console.log(chalk.default.blue(message));
}

// Function to log a red message
async function logRed(message) {
  const chalk = await import("chalk");
  console.log(chalk.default.red(message));
}

// Function to log a green message
async function logGreen(message) {
  const chalk = await import("chalk");
  console.log(chalk.default.green(message));
}

// Function to log a yellow message
async function logYellow(message) {
  const chalk = await import("chalk");
  console.log(chalk.default.yellow(message));
}

// Use the functions
logBlue("This is a blue message");
logRed("This is a red message");
logGreen("This is a green message");
logYellow("This is a yellow message");
