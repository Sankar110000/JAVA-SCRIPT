
function sayMyname() {
    console.log("s")
    console.log("a")
    console.log("n")
    console.log("k")
    console.log("a")
    console.log("r")
}

// sayMyname();


function addTwoNums(num1, num2){
    // const result = num1 + num2 ;
    // return result;

    return num1 + num2;
}

const result = addTwoNums(4, 5);

console.log("result : ",result);

function loginUserMessage(username = "sam") {
    if(!username){
        return "please enter username";
    }else {
        return `Hello ${username}`;
    }
}

const message = loginUserMessage();


// console.log(message);


const calcCartPrice = function(val1, val2, ...num1) {
    return num1;
}

// console.log(calcCartPrice(200, 300, 400, 4000));


const user = {
    name: "sankar",
    age: 18
}

function sayUser(anObj){
    console.log(`username is ${anObj.name}`);
}

// sayUser({
//     name: "bob",
//     age: 23
// });

function getNums(arr) {
    return arr[1];
};

const newArr = [100, 200, 300];

const newelement = getNums(newArr);

console.log(newelement);