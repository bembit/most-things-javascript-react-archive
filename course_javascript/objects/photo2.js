// copy a version 8

// extend PhotoAPI.js

export const update = (photo, category) =>
  fetch(`${api}/photos/${photo.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ category })
}).then(res => res.json())

// Headers and localStorage tokens

let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

// check where I do the API call, Main.js, or Category.js?

// define the handler - onCategoryChange and pass it all the way down to each individual photo

onCategoryChange = (photo, category) => {
        const id = photo.id
        const favouritedPhotos = [...this.state.photos]
        const updateIndex = favouritedPhotos.findIndex(photo => photo.id === id)
        const updatePhoto = Object.assign({}, favouritedPhotos[updateIndex], { category: category });

        this.setState({ photos: [...favouritedPhotos.slice(0, updateIndex), updatePhoto, ...favouritedPhotos.slice(updateIndex + 1)]
        })
        PhotoAPI.update(photo, category)
}

// then the individual photo inside the modal will have the onCategoryChange={onCategoryChange} handler as FAVOURITE

<button onChange={e => onCategoryChange(photo, e.target.value)} value={photo.category ? photo.category : ''} />

// inside render() we need a switch for push into the fav array

// do I need all the categories as well, or just the favs. what if I remove the photo from favs? default?

        const { photos } = this.state
        let favourites = [];

        photos.forEach(photo => {
            switch(photo.category) {
                case 'favourite':
                    favourites.push(photo)
                    break
// I might need all the others as switch cases too. Portrais, weddings, etc.
                default:
                    break
            }
})

// render the component

<Category onCategoryChange={this.onCategoryChange} />

// alternative

// make a filter for tags

function filterFunction() {

    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}