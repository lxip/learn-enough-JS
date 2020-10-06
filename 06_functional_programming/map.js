let states = ['Kansas', 'Nebraska', 'North Dakota', 'South Dakota'];

// // urls: Imperative version
// function imperativeUrls(elements) {
//   let urls = [];
//   elements.forEach(function(element) {
//     urls.push(element.toLowerCase().split(/\s+/).join("-"));
//   });
//   return urls;
// }
// console.log(imperativeUrls(states));

// // urls: Functional version
// function functionalUrls(elements) {
//   return elements.map(element => element.toLowerCase().split(/\s+/).join('-'));
// }
// console.log(functionalUrls(states));

// Returns a URL-friendly version of a string.
//  Example: "North Dakota" -> "north-dakota"

function urlify(string) {
  return string.toLowerCase().split(/\s+/).join('-');
}

// urls: Imperative version
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function (element) {
    urls.push(urlify(element));
  });
  return urls;
}
console.log(imperativeUrls(states));

// urls: Functional version
function functionalUrls(elements) {
  return elements.map((element) => urlify(element));
}
console.log(functionalUrls(states));

function urlPath(elements) {
  return elements.map((element) => `https://example.com/${urlify(element)}`);
}

console.log(urlPath(states));
