// array declarartion

const myArr = [0, 1, 2, 3, 4, 5];
const  arr = new Array(1, 2, 3, 4, 5);


// array access

// console.log(arr[0]);

//                            Array methods

// myArr.push(6)
// myArr.pop()
// console.log(myArr);


// myArr.unshift(6)
// myArr.shift()

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(10))



const marvelHeroes = ["iromman", "thor", "hulk", "spiderman"]
const dcHeroes = ["superman", "batman", "flash"]

// console.log(marvelHeroes.join("-"));

// console.log(myArr.slice(1,3));
// console.log(myArr.splice(1,3));


// marvelHeroes.push(dcHeroes)

// let allHeroes = marvelHeroes.concat(dcHeroes);
// console.log(allHeroes);


let heroes = [...marvelHeroes, ...dcHeroes];
// console.log(heroes);

let nums = [1, 2, 3, 4, [5, 6], 7, [8, 9]];
// console.log(nums.flat(Infinity));

console.log(Array.isArray("sankar"));
console.log(Array.from("sankar"));
console.log(Array.from({name: "sankar"}));//   intresting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));