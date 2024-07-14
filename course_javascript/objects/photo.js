//basic photo object

let photos = {
    name: 'User Input',
    tags: 'User Input',
    category: 'User Input',
    likes: 0, //User Input, default value as 0
    favourites: 0, //User Input, default value as 0
    isTrending: function(trending) {
        let total = this.likes + this.favourites
        return total >= trending
    }
}

// define a dynamic trending value based on the amount of photos we have and the amount of likes / favourites each one has

let trending = photos.forEach(function(photo) {
    return (photo.likes + photo.favourites) / photos.length
})

// the isSaved state should overwrite the category, and render it inside a saved category.
// or keep the category and render it twice, inside an extra category SAVED PHOTOS on top

// inside the constructor define a state of saved that defaults to false, so it won't be rendered inside the SAVED PHOTOS category
// pass it to the rendered component as isSaved={this.state.isSaved}
// pass it to each individual photo as savedStatus={isSaved}

this.state = {
    isSaved: false,
}

// handler for cliking save the first time
// pass to save button as onClick={this.handleSave}

handleSave = () => {
    this.setState(() => ({
        isSaved: true,
    }));
}

// handler for clicking save a second time
// pass to save button as onClick={this.handleSave}

handleUnSave = () => {
    this.setState(() => ({
        isSaved: false,
    }));
}

// event handler

let like = function(photo, amount = 1) {
    photo.likes = photo.likes + amount
}

// event handler

let favourited = function(photo, amount = 1) {
    photo.favourites = photo.favourites + amount
}

// log it for testing later

console.log(photos.isTrending(trending))