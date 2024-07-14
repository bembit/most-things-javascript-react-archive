let temp = 55

if (temp && temp >= 60 && temp <= 90) {
    console.log('It is nice outside')
}

if(temp && (temp <= 0 || temp >= 120)) {
    console.log('Don\'t go outside')
}

if (temp && temp >= 60 && temp <= 90) {
    console.log('It is nice outside')
} else if(temp && (temp <= 0 || temp >= 120)) {
    console.log('Don\'t go outside')
} else {
    console.log('Do what you want!')
}