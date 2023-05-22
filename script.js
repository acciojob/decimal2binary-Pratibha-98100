function decimalToBinary(decimal) {
  // Check if the input is valid
  if (decimal === 0) {
    return '0';
  } else if (decimal < 0 || !Number.isInteger(decimal)) {
    return 'Invalid input. Please enter a positive integer.';
  }

  let binary = '';
  while (decimal > 0) {
    // Get the remainder when dividing by 2
    const remainder = decimal % 2;
    // Append the remainder to the binary string
    binary = remainder + binary;
    // Update the decimal by dividing it by 2
    decimal = Math.floor(decimal / 2);
  }

  return binary;
}

console.log(`Binary representation: ${binaryNumber}`);

//module.exports = threeSum;
