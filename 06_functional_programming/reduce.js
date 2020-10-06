let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let states = ['Kansas', 'Nebraska', 'North Dakota', 'South Dakota'];

// sum: Imperative solution
function imperativeSum(elements) {
  let total = 0;
  elements.forEach(function (n) {
    total += n;
  });
  return total;
}
// console.log(imperativeSum(numbers));

// sum: Functional solution (reduce)
function functionalSum(elements) {
  return elements.reduce((total, n) => { return total += n; });
}
// console.log(functionalSum(numbers));

// lengths: Imperative solution
function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach(function(element) {
    lengths[element] = element.length;
  });
  return lengths;
}
// console.log(imperativeLengths(states));


// lengths: functional solution 2
function functionalLengths(elements) {
  return elements.reduce((lengths, element) => { lengths[element] = element.length; return lengths; }, {});
}
console.log(functionalLengths(states));


// EXE: Product
function functionProduct(elements) {
  return elements.reduce((total, n) => { return total *= n; });
}
console.log(functionProduct(numbers));