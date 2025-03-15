const readline = require('readline');

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to check if a year is a leap year
function year(n) {
  if ((n % 4 === 0 && n % 100 !== 0) || n % 400 === 0) {
    return 366; // Leap year
  } else {
    return 365; // Not a leap year
  }
}

// Take input from the user
rl.question('Enter a year: ', (input) => {
  const n = parseInt(input); // Convert input to an integer

  if (isNaN(n)) {
    console.log('Invalid input. Please enter a valid year.');
  } else {
    const days = year(n); // Call the function
    console.log(`The year ${n} has ${days} days.`);
  }

  rl.close(); // Close the readline interface
});