// immediatley invoked function expression

//define variable
var firstname = 'Pete';
//let the invoked run first with other variable
(function () {
    //whatever variable I create inside a function is protected and used inside the function only. scope.
    var firstname = 'John';
    console.log(firstname);
    
}());
//console log var Pete
console.log(firstname);




// other === passed in to invoked

(function (lastname) {

    var firstname = 'John';
    console.log(firstname);
    console.log(lastname);
    
}('Doe'));