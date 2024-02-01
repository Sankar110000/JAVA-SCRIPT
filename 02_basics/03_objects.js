// const tinderUser = new Object()      /singleton object

const tinderUser = {};

tinderUser.id = 123;
tinderUser.name = "sam"
tinderUser.isLoggedIn = true;

// console.log(tinderUser)


const regularUser = {
    email: "a@gmail.com",
    fullName: {
        userfullname: {
            firstName: "Kaibalya",
            lastName: "Sahoo"
        }
    }
}

// console.log(regularUser.fullName.userfullname.firstName);

const obj1 = {1: "a", 2: "b", 3: "c"};
const obj2 = {4: "d", 5: "e"}

// const newObj = Object.assign({}, obj1, obj2)

const newObj = {...obj1, ...obj2}

console.log(newObj);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(tinderUser.hasOwnProperty("name"))


const course = {
    courseName: "KuchBhi",
    price: "6999",
    courseInstructor: "hitesh"
}

let {courseInstructor: instructor} = course;
// console.log(instructor);



//        JSON
// {
//     "name": "sankar"
//     "email": "sankar@gmail.com"
// }


