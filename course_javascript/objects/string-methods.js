let name = '   Bence Madar  '

// Basics

console.log(name.length)

let capName = name.toUpperCase()
console.log(capName)

let lowName = name.toLowerCase()
console.log(lowName)


// Includes

let password = 'abc123password098'

console.log(password.includes('password'))

// Trim
// remove whitespace from beginning and end of strings
console.log(name.trim())


// isValidPassword

// let isValidPassword = function(password) {
//     if (password.length >= 9 && !password.includes('password')) {
//         return true
//     } else {
//         return false
//     }
// }

let isValidPassword = function(password) {
    return password.length >= 9 && !password.includes('password')
}

console.log(isValidPassword('asdasf'))
console.log(isValidPassword('abch123125as!$'))
console.log(isValidPassword('asdfqwpasswordasfg'))