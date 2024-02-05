const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.map( (num) => { return num + 10})

// const newNums = []

// const newNums = myNums.filter( (num) => num==10 )

const newNums = myNums
                .map( (num) => num * 10)
                .map( (num) => num + 1)
                .filter((num) => num >=50)


const newNum2 = []

myNums.forEach((num) => {
    num = num * 10 + 1;
    if(num >= 50) newNum2.push(num);
});

console.log(newNums);