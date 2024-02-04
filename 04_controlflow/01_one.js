//  if statement 

// const isUserLogegdin = true;
// const temperature = 41;

// if(temperature < 50){
//     console.log(" < 50");
// }else{
//     console.log(" > 50")
// }

// console.log("executed");

// <, >, >=, <=, ==, !=, ===, 



// const score = 200;

// if(score > 100){
//     let power = "fly"
//     console.log(`user power ${power}`)
// }

// console.log(`user power ${power}`)


// const balance = 1000;

// if(balance > 500) console.log("test"),
// console.log("test2");


// if (balance < 500) {
//     console.log("less than 500");
// }else if (balance < 750) {
//     console.log();
// }else if (balance < 900) {
//     console.log("less than 900")
// }else {
//     console.log("less than 1200");
// }


const userLoggedin = true;
const debitCard = true;
const loggedInFromGoogle  = false;
const loggedInFromEmail = true;

if (userLoggedin && debitCard && 2==2) {
    console.log("allowed to buy course");
}

if (loggedInFromEmail || loggedInFromGoogle){
    console.log("allowed");
}

