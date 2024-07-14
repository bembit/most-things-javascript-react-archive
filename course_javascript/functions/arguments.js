//multiple arguments
let add = function(x, y, z) {
    return x + y + z
}

let result = add(3, 4, 11)
console.log(result)

// default arguments
let getScoreText = function(name = 'Player Unknown', score = 0) {
    return 'Name: ' + name + ' === ' + 'Score: ' + score
}

let scoreText = getScoreText(undefined, null)
console.log(scoreText)