const score = 400
// console.log(score);

const balance = new Number(300)
// console.log(balance)


// toString method
// console.log(balance.toString().length)


// toFixed method
// console.log(balance.toFixed(1));

//  toPrecision method 
const anotherNum = 123.877
// console.log(anotherNum.toPrecision(3))


//toLocaleString method
const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'))


// ******************MATHS*****************


//  Different methods of math


// console.log(Math)
// console.log(Math.abs(-4));
// console.log(Math.round(4.8));
// console.log(Math.floor(12.9));
// console.log(Math.ceil(12.9));
// console.log(Math.min(1,2,3,4,5))
// console.log(Math.max(9,5,54))

console.log(Math.floor(Math.random()));
console.log(Math.floor(Math.random()*6));
console.log(Math.random()*10);


const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
