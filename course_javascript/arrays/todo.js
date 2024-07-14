const todos = [
    'Learn JavaScript', 'Sad sad..', 'Build the Udacity project'
]

console.log(`You have ${todos.length} things to do`)
console.log(`First just ${todos[0]}`)
console.log(`After ${todos[1]}`)
console.log(`Finally ${todos[2]}`)

todos.forEach(function(todo, index) {
    console.log(`${index}. ${todo}`)
})

todos.push('Design Oanas site')
console.log(todos)

todos.pop()
console.log(todos.pop())
console.log(todos)

todos.splice(1, 0, 'STUDY MOAR AND MOAR')
console.log(todos[1])
