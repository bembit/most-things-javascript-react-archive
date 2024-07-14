// function statement
function greet() {
    console.log("Hi there");
}
greet();

// functions are first class
function logGreeting(fn) {
    fn();
}
logGreeting(greet); //passing greet to fn

// function expression
var greetMe = function() {
    console.log("Hi THERE!");
}
greetMe(); //call the greetMe variable as a function

// it's still first-class
logGreeting(greetMe);

// use a function expression on the fly
logGreeting(function() {
    console.log("Hello Tony!");
})