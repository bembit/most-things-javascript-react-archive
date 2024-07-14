let myAccount = {
    name: 'Bence Madar',
    expenses: 0,
    income: 0
}

let addExpense = function(account, amount) {
    account.expenses = account.expenses + amount
}

let addIncome = function(account, amount) {
    account.income = account.income + amount
}

let resetAccount = function(account) {
    account.expenses = 0
    account.income = 0
}

let getAccountSummary = function(account) {
    let balance = account.income - account.expenses
    return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`
}

addIncome(myAccount, 2000)
addExpense(myAccount, 2.50)
addExpense(myAccount, 160)

console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))

let photos = {
    name: 'View from my balcony',
    artist: 'Bence Madar',
    likes: 0,
    favourites: 0,
    tags: ''
}

let like = function(photo, doesntmatteritsanargument) {
    photo.likes = photo.likes + doesntmatteritsanargument
}

let favs = function(photo, favs) {
    photo.favourites = photo.favourites + favs}

let newPhoto = function(photo) {
    return `${photo.name} by artist ${photo.artist} currently has ${photo.likes} likes and is favourited by ${photo.favourites} people.`
}

console.log(newPhoto(photos))
like(photos, 3)
favs(photos, 2)
console.log(newPhoto(photos))
