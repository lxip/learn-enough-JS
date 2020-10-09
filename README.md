# Learn Enough JavaScript (with palindrome detector)

This is a practice NPM module created based on the tutorials of Learn Enough JavaScript to Be Dangerous by Michael Hartl.

The module can be used as follows:

```
$ npm install --global lxip-palindrome
$ vim test.js
let Phrase = require("lxip-palindrome");
let napoleonsLament = new Phrase("Able was I, ere I saw Elba.");
console.log(napoleonsLament.palindrome());
$ node test.js
true
```