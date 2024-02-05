const myNums = [1, 2, 3, 4]

// const myTotal = myNums.reduce(function (acc, curr) { 
//     console.log(`acc: ${acc}, currentValue: ${curr}`);
//     return acc + curr
// }, 0);

// const myTotal = myNums.reduce((acc, curr) => acc + curr, 0) 

// console.log(myTotal);


const shoppingCart = [
    {
        itemCart: "js course",
        price: 3000
    },
    {
        itemCart: "python course",
        price: 4000
    },
    {
        itemCart: "data science",
        price: 13000
    },
];



const totalPrice = shoppingCart.reduce((acc,curr) => acc + curr.price, 0 )
console.log(totalPrice);