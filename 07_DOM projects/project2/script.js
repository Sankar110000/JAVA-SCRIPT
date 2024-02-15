// const form = document.querySelector("form");

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const width = document.querySelector("#width");
//     const height = document.querySelector("#height");
//     const results = document.querySelector('#results');

//     if(height.value && width.value){
//         results.innerText = parseInt(height.value) + parseInt(width.value);
//     }else{
//         alert("Please enter value");
//     }
// });



const form = document.querySelector('form')


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const width = parseInt(document.querySelector('#width').value);
    const height = parseInt(document    .querySelector('#height').value);
    
    const results = document.querySelector('#results');
    results.innerText = width*height;

})