const name = 'sankar'
const repoCount = 10

// console.log(name + repoCount + " value")

// console.log(`hello ${name}, your repo ci=ount is ${repoCount}`);

const gameName = new String("valorant");

// console.log(gameName[0])
// console.log(gameName.__proto__)


// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("t"));

const newString = gameName.substring(4,6);
// console.log(newString);

const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);

const newString1 = "   sankar "
console.log(newString1.trim())

const url = "www.choogle.com"

//Replace method in string
console.log(url.replace("c","g"));
console.log(url)


//includes method in String
console.log(url.includes("ch"))

//  Split method in string
const newString2 = "this-is-a-new-String"
console.log(newString2.split('-')[3]);