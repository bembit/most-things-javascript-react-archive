const totalScore = 100

let countScore = function(studentScore) {
    return (studentScore / totalScore) * 100
}

let score = countScore(85)

if (score && score >= 90) {
    console.log(`You got an A (${score})`)
} else if (score && score < 90 && score >=80 ) {
    console.log(`You got a B (${score})`)
} else {
    console.log('You are stupid, sorry.')
}

//
const gradeCalc = function(studScore, totScore) {
    const percent = (studScore / totScore) * 100
    let letterGrade = ''

    if (percent >= 90) {
        letterGrade = 'A'
    } else if (percent >= 80) {
        letterGrade = 'B'
    } else if (percent >= 70){
        letterGrade = 'C'
    } else {
        letterGrade = 'F'
    }
    return `You got a ${letterGrade} (${percent})`
}

let results = gradeCalc(15,20)
console.log(results)