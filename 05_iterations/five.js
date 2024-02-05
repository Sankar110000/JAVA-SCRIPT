const coding = ["js", "ruby", "java", "py", "cpp"]

// coding.forEach( function (item) {
//     console.log(item);
// })


// coding.forEach((item) => {
//     console.log(item);
// })


function printMe(item) {
    console.log(item);
}


// coding.forEach(printMe)


// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// });


const myCoding = [
    {
        languageName: "javascript",
        languagefile: "js"
    },
    {
        languageName: "python",
        languagefile: "py"
    },
    {
        languageName: "cpp",
        languagefile: "c++"
    },
]


myCoding.forEach((item) => {
    console.log(item.languageName);
});