// a palindrome can be defined as “a string and the string reversed are the same.”

// Reverses a string.
function reverse(string) {
  return Array.from(string).reverse().join(""); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
}

function palindrome(string) {
  let processedContent = string.toLowerCase();
  return processedContent === reverse(processedContent);
}
