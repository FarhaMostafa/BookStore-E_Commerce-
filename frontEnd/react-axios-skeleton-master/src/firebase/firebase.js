// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
// import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
// import "firebase/firestore";

import firebaseConfig from './config';

export default class Firebase {
    constructor() {
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);

        this.auth = firebase.auth();
    }

    // *** Auth API ***
    createUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    signInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    signOut = () => this.auth.signOut();

    sendPasswordResetEmail = email => this.auth.sendPasswordResetEmail(email);

    updatePassword = password => this.auth.currentUser.updatePassword(password);

    // firebase.auth().createUserWithEmailAndPassword(email, password)
    //   .then((userCredential) => {
    //     // Signed in 
    //     var user = userCredential.user;
    //     // ...
    //   })
    //   .catch((error) => {
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     // ..
    //   });
    //   firebase.auth().createUserWithEmailAndPassword(email, password)
    //   .then((userCredential) => {
    //     // Signed in 
    //     var user = userCredential.user;
    //     // ...
    //   })
    //   .catch((error) => {
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     // ..
    //   });
    onAuthUserListener = (next, fallback) =>
        this.auth.onAuthStateChanged(user => {
            if (user) {
                // this.user(user.uid)
                //   .once("value")
                //   .then(snapshot => {
                //     const dbUser = snapshot.val();

                //     if (!dbUser.roles) {
                //       dbUser.roles = {};
                //     }

                //     next({
                //       uid: user.uid,
                //       email: user.email,
                //       ...dbUser
                //     });
                //   });
            } else {
                fallback();
            }
        });
}