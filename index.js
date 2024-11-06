// index.js

/**
 * Prints numbers from 1 to n, replacing:
 * - Multiples of 3 with 'google'
 * - Multiples of 5 with 'facebook'
 * - Multiples of both with 'amazon'
 * @param {number} n - The maximum number to print up to
 * @returns {string[]} Array of results for testing purposes
 */
function techFizzBuzz(n) {
  const results = [];

  for (let i = 1; i <= n; i++) {
    let output;

    if (i % 3 === 0 && i % 5 === 0) {
      output = 'amazon';
    } else if (i % 3 === 0) {
      output = 'google';
    } else if (i % 5 === 0) {
      output = 'facebook';
    } else {
      output = String(i);
    }

    console.log(output);
    results.push(output);
  }

  return results;
}

// Run the main program
console.log('Running Tech FizzBuzz from 1 to 100:');
techFizzBuzz(100);

// Test cases
function runTests() {
  console.log('\nRunning tests...');

  const testCases = [
    { input: 3, expected: 'google' },
    { input: 5, expected: 'facebook' },
    { input: 15, expected: 'amazon' },
    { input: 1, expected: '1' },
    { input: 30, expected: 'amazon' },
  ];

  testCases.forEach(({ input, expected }) => {
    const results = techFizzBuzz(input);
    const actual = results[results.length - 1];

    if (actual === expected) {
      console.log(`✅ Test passed for ${input}: got "${actual}"`);
    } else {
      console.log(
        `❌ Test failed for ${input}: expected "${expected}", got "${actual}"`
      );
    }
  });
}

// Run tests if we're not in production
if (process.env.NODE_ENV !== 'production') {
  runTests();
}

// Export for use in other files
module.exports = techFizzBuzz;
