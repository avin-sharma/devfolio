// Firebase imports
var firebase = require("firebase/app");
require("firebase/auth");
import firebaseConfig from '../firebaseConfig'
let firebaseApp: any;

const isUserLoggedIn = async() => {
    var user = await getFirebase().auth().currentUser;
    if (user) {
        // User is signed in.
        return true;
    } else {
        // No user is signed in.
        return false;
    }
}

const getFirebase = () => {
    if (firebaseApp){
        return firebaseApp;
    }

    // Does this need async/await?
    firebaseApp = firebase.initializeApp(firebaseConfig);
    return firebaseApp
}

export {
    isUserLoggedIn,
    getFirebase
}