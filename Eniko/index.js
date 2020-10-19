// *Write program to generate random HEX color

// NOTE: toString(16) ==> Number 16 represent the hexadecimal value. ie when you convert the number to string using the javascript toString method then using the radix 16 you will get the result in hexadecimal format.

// Maximum range for HEX is 16777215

// You can test the output ==> https://www.daftlogic.com/projects-hex-colour-tester.htm?hex=FF0066

let variables = "0123456789abcdef";
let variable1 = variables[Math.floor(Math.random() * 16)];
let variable2 = variables[Math.floor(Math.random() * 16)];
let variable3 = variables[Math.floor(Math.random() * 16)];
let variable4 = variables[Math.floor(Math.random() * 16)];
let variable5 = variables[Math.floor(Math.random() * 16)];
let variable6 = variables[Math.floor(Math.random() * 16)];

console.log("#" + variable1 + variable2 + variable3 + variable4 + variable5 + variable6);