// prototypal inheritance

// constructor function
const Person = function(firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}

Person.prototype.getBio = function() {
    let bio = `${this.firstName} is ${this.age}.`

    this.likes.forEach((like) => {
        bio = bio + ` ${this.firstName} likes ${like}.`
        // bio += ` ${this.firstName} likes ${like}.`
    })

    return bio
}

Person.prototype.setName = function(fullName) {
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
}

const me = new Person('Bence', 'Madar', 29, ['JavaScript', 'Management'])

me.getBio = function() {
    return 'This is fake!'
}
// separate instances, no effect on person2
me.setName('Bembit Riown')
console.log(me.getBio())

const person2 = new Person('Aron', 'Kovacs', 31)
// changed before function call
Person.prototype.getBio = function() {
    return 'Testing Prototypes'
}

console.log(person2.getBio())