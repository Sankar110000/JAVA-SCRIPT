// const promise1 = new Promise(function (resolve, reject){
//     setTimeout(function() {
//         console.log('Async task is complete');
//         resolve();
//     }, 1000)
// });

// promise1.then( function() {
//     console.log('Promise consumed');
// });

// new Promise(function (resolve, reject) {
//     setTimeout( () => {
//         console.log("Async task 2");
//         resolve();
//     }, 1000)
// }).then( () => {
//     console.log('Async two resolved');
// });

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ username: "sankar", email: "sankar@gamil.com" });
//   }, 1000);
// });

// promise3.then((user) => {
//   console.log(user);
// });

// const promise4 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       resolve({ username: "sankar", pass: "sankar110000" });
//     } else {
//       reject("Error: some thing went wrong");
//     }
//   }, 1000);
// });

// promise4
//   .then((obj) => {
//     console.log(obj);
//     return obj.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((err) => console.log(err))
//   .finally(() =>
//     console.log("Finally the promise is either resolved or rejected")
//   );

// const promise5 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const error = true;
//     if (!error) {
//       resolve({ username: "JavaScript", pass: "123" });
//     } else {
//       reject("JS went wrong");
//     }
//   }, 1000);
// });

// async function consume5() {
//   try {
//     const response = await promise5;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consume5();

// // async function getAllUsers(){
// //     try{
// //       const response = await fetch('https://api.github.com/users/hiteshchoudhary')
// //       const data = await response.json();
// //       console.log(data);
// //     }catch(err){
// //       console.log(err);
// //     }
// // }
// // getAllUsers();

// fetch('https://api.github.com/users/hiteshchoudhary')
// .then((res) => {
//   return res.json()
// })
// .then((data) => {
//   console.log(data);
// })
// .catch((err) => {
//   console.log(err);
// })

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("promise called");
      resolve({username: "sankar", pass: "sankar110000"})
    }, 1000)
  });
  
  promise
    .then((user) => user.username)
    .then(username => console.log(username))
    .catch((err) => console.log(err));
  
  
    async function callme(){
      const data = await fetch('https://api.github.com/users/hiteshchoudhary');
      console.log(data);
    }
  
    callme();
  
  