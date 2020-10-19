// *Write program to generate random HEX color

// NOTE: toString(16) ==> Number 16 represent the hexadecimal value. ie when you convert the number to string using the javascript toString method then using the radix 16 you will get the result in hexadecimal format.

// Maximum range for HEX is 16777215

// You can test the output ==> https://www.daftlogic.com/projects-hex-colour-tester.htm?hex=FF0066

let x = Math.floor(Math.random() * 16777215); // ==> to be able to get the choice of 255 you need to write 256 using Math.floor
console.log("x ==>", x);

let BackgroundColor = x.toString(16);

console.log("BackgroundColor ==>", BackgroundColor);
