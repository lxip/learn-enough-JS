console.log('ant bat cat'.split(' '));

let a = 'badger'.split('');
console.log(a[0]);

a.join('-');

let b = [42, 8, 17, 99];
console.log(b.slice(1, 3)); // [8, 17]
console.log(b.slice[-1]); //[99]

b.sort(); // change in place
b.reverse(); // mutate in place
b.push('foo'); // array can hold multiple datatype all at once
b.pop(); // 'foo' mutate in place

for (let i = 0; i < b.length; i++) {
  console.log(b[i]);
}
