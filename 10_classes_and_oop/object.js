function mulBy5(num) {
    return num*5;
}

mulBy5.power = 2

console.log(mulBy5(8));
console.log(mulBy5.power);
console.log(mulBy5.prototype);


function createUser(username, score){
    this.username = username
    this.score = score

}

createUser.prototype.increament = function (){
    this.score++ 
}

createUser.prototype.printMe = function() {
    console.log(`score is ${this.score}`);
}

const user1 = new createUser("user1", 99)
const user2 = createUser("User2", 76)

user1.increament();
user1.printMe();
