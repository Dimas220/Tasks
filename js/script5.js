"use strict";

const str = "teSt";
const arr = [1, 2, 4];

// console.log(str[2]);
// console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

let fruit = "Some fruit";

console.log(fruit.indexOf("fruit"));

const logg = "Hello world";

console.log(logg.slice(6, 11)); // Работает с минусами
console.log(logg.slice(-5, -1));

console.log(logg.substring(6, 11)); // тоже самое что slice don't work with minus

console.log(logg.substr(6, 5)); // сколько символов надо вырезать

const num = 12.2;
console.log(Math.round(num)); // okruglenie

const test = "12.2px";
console.log(parseInt(test)); // переводит число в другую систему исчесления (двоич., восмертич.)
console.log(parseFloat(test)); // переводит в десятичную сист.исчесл.
