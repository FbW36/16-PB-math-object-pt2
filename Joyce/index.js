let min = 0;
let max = 16777215;
let random = Math.floor(Math.random() * (max - min + 1) + min);
let hexColor = random.toString(16);
console.log("random HEX color==>", hexColor);
