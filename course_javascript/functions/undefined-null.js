// undefined for vars
let name

if (name === undefined ) {
    console.log('Seems there is no value to this variable')
} else {
    console.log(name)
}

// undefined for func arguments 

let square = function (num) {
    console.log(num)
}

let result = square()

console.log(result)

// undefined is default

let age = 27
// null is an explicit clear by the dev
age = null

console.log(age)