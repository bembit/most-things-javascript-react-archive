const notes = [
    'Note1', 'Note2', 'Note3'
]

// console.log(notes)
// console.log(notes.length)
// console.log(notes.length - 1)

// notes.forEach(function(note, index) {
//     console.log(note, index)
// })

// console.log(notes[1])
// console.log(notes[11]) //undefined

// notes.pop()
// console.log(notes.pop())

// notes.push('Note4')
// console.log(notes)

// console.log(notes.shift())

// console.log(notes.unshift())

//

const notes_2 = [
    'note1', 'note2', 'note3'
]

notes_2.splice(1, 2)
console.log(notes_2)

notes_2.splice(1, 1, 'This is the new second item')
console.log(notes_2)

notes_2[2] = 'This is the new note 3'
console.log(notes_2)