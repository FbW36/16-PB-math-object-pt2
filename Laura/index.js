// # 16-PB-math-object-pt2

// **Write program to generate random HEX color

// NOTE: toString(16) ==> Number 16 represent the hexadecimal value. ie when you convert the number to string using the javascript toString method then using the radix 16 you will get the result in hexadecimal format.

// Maximum range for HEX is 16777215

let base = Math.floor(Math.random() * 16777215);
console.log(base);
let randomHex = base.toString(16);
console.log(randomHex);
