import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAEvVKkHo9a4EF7Yqr5_syAYFGMWdJiBWU",
    authDomain: "clg-project-efb52.firebaseapp.com",
    projectId: "clg-project-efb52",
    storageBucket: "clg-project-efb52.appspot.com",
    messagingSenderId: "725307586057",
    appId: "1:725307586057:web:d3c7e98691931b924caad8",
    measurementId: "G-3968LQWV1X"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };