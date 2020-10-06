// // Reverses a string.
// function reverse(string) {
//   return Array.from(string).reverse().join("");
// }

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  this.louderContent = function louderContent() {
    return this.content.toUpperCase();
  };

  // Returns content processed for palindrome testing.
  // // this.processedContent = function processedContent() {
  // //   return this.content.toLowerCase();
  // // };
  this.processor = function(string) {
    return string.toLowerCase();
  }

  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  // // this.palindrome = function() {
  // //     let processedContent = this.content.toLowerCase();
  // //     return processedContent === reverse(processedContent);
  // // };
  this.palindrome = function palindrome() {
    // return this.processedContent() === reverse(this.processedContent());
    return this.processedContent() === this.processedContent().reverse();
  };
}

// let greeting = new Phrase("Hello, world!");
// console.log(greeting.content); // Hello world!



// Defines a TranslatedPhrase object.
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  // Returns translation processed for palindrome testing.
  // After the processor method
  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  }
}
// Defining a TranslatedPhrase object with a Phrase prototype.
TranslatedPhrase.prototype = new Phrase();


// Adds `blank` to all strings.
String.prototype.blank = function() {
  return this.length === 0 || /^\s*$/.test(this);
  // return !!(this.match(/^\s*$/g));
}

// Adds `last` to all arrays.
Array.prototype.last = function() {
  return this.length === 0 || /^\s*$/.test(this);
}


// examples after revisions
let frase = new TranslatedPhrase("recognize", "reconocer");
console.log(frase.palindrome()); // true

let napoleonsLament = new Phrase("Able was I ere I saw Elba");
console.log(napoleonsLament.palindrome()); //true

console.log(''.blank()); // true
console.log(' '.blank()); // true
console.log('\t\n'.blank()); // true
console.log('\v\r'.blank()); // true
console.log(' real string '.blank()); // false

