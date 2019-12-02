const firebase = require("firebase")

const isUserSignedIn = () => {
    var user = firebase.auth().currentUser;
    if (user) {
        // User is signed in.
        return true;
    } else {
        // No user is signed in.
        return false;
    }
}

module.exports = {
    isUserSignedIn
}