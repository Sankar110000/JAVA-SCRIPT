// for

for (let i = 0; i <= 10; i++) {
    const element = i;  
    if(element == 5){
        // console.log("5 is best");
    }
    // console.log(element)
}

// for (let i = 1; i <= 10; i++) {
//     console.log(`ouetr loop ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         // console.log(`ouetr lopp value ${j} and inner loop value ${i}`);
//         // console.log(i + '*' + j + ' = ' + i*j);
//     }
// }


// const myArr = ["flash", "batman", "superman"]

// for (let i = 0; i < myArr.length; i++) {
//     const element = myArr[i];
//     console.log(element)
// }


// for (let i = 1; i <= 20; i++) {
//     if(i == 5){
//         break;
//     }
//     console.log(`value of i is ${i}`);
// }


for (let i = 1; i <= 20; i++) {
    if(i == 5){
        continue;
    }
    console.log(`value of i is ${i}`);
}