const arg = process.argv[2];

// Convert argument to integer using parseInt
const num = parseInt(arg, 10);

// Check if conversion is valid number and arg exists
if (arg !== undefined && !isNaN(num)) {
  console.log(`My number: ${num}`);
} else {
  console.log("Not a number");
}
