//  Immidiately Invoked Functions Expressions (IIFE)

(function kuchBhi(){
    // named IIFE
    console.log("DB connected");
})();

( (name) => {
    console.log(`Hello, ${name}`)
})("sankar")