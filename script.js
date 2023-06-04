function decimalToBinary(decimalNumber) {
  // Base case: if the decimal number is 0, its binary representation is also 0
  if (decimalNumber === 0) {
    return '0';
  }

  let binary = '';
  // Convert the decimal number to binary using repeated division by 2
  while (decimalNumber > 0) {
    // Get the remainder of the division
    const remainder = decimalNumber % 2;
    // Append the remainder to the binary representation
    binary = remainder + binary;
    // Update the decimal number by performing integer division by 2
    decimalNumber = Math.floor(decimalNumber / 2);
  }

  return binary;
}

console.log(decimalToBinary(7)); // Output: 111
console.log(decimalToBinary(10)); // Output: 1010
console.log(decimalToBinary(33)); // Output: 100001

module.exports = decimalToBinary;