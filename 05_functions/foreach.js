// // a for loop
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }
//// Equivalent in forEach
// array.forEach(function(element) {
//   console.log(element);
// });

let a = ["ant", "bat", "cat", 42];
a.forEach(function(element) {
  console.log(element);
});

let soliloquy = "To be, or not to be, that is the question:";
Array.from(soliloquy).forEach(function(character) {
  console.log(character);
});

//anonymous function
a.forEach( element => console.log(element) );

let b = [ 17, 42, 8, 99 ];
b.sort( (x, y) => x - y );