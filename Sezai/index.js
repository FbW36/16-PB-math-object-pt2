//*Write program to generate random HEX color

//**Bildergebnis für how many hex colors
//How Many Hex Colors Are There? In standard #RRGGBB notation, there are 256^3 color combinations available, or 16,777,216. This is because each color value RR, GG, BB can contain 256 different values, ranging from 00 to FF.//

let minNum1 = 0;
let maxNum1 = 16777216;
let color = Math.floor(Math.random() * (maxNum1 - minNum1 + 1) + minNum1);
console.log("HEX-color==>", color.toString(16));