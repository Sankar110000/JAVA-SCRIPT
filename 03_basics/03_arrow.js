const user = {
    username: "sankar",
    price: "999",
    welcomeMessage: function (){
        // console.log(`${this.username}, welcome to the website`);
        console.log(this);
    }
}


// user.welcomeMessage();
// user.username = "sam"
// user.welcomeMessage();


// console.log(this);


// function name() {
//     let username = "sankar";
//     console.log(this.username);
// }

// name();


// const one = () => {
//     let username = "sankar"
//     console.log(this.username);
// }

// one();


// const addTwo = (num1, num2) => num1 + num2


// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({name: "sankar"})



console.log(addTwo(3, 4))

const myArr = [1, 2, 3, 4, 5]

// myArr.forEach()