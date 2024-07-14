// if we remove the THIS keyword inside the function, we are scoping for the global variables, and will not use the object key values
let guestCapacity = 50
let guestCount = 55

let restaurant = {
    // so this! is the object
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    // this is the method
    checkAvailability: function(partySize) {
        // this references the object the method is defined on
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function(partySize) {
        this.guestCount = this.guestCount + partySize
    },
    removeParty: function(partySize) {
        this.guestCount = this.guestCount - partySize
    }
}

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))