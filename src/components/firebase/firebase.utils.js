import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    
        apiKey: "AIzaSyCd4teGJJ84BbtRh3TtMBmQRmsdUVgUBSU",
        authDomain: "crown-shop-1111.firebaseapp.com",
        databaseURL: "https://crown-shop-1111.firebaseio.com",
        projectId: "crown-shop-1111",
        storageBucket: "crown-shop-1111.appspot.com",
        messagingSenderId: "15043186944",
        appId: "1:15043186944:web:24f5c9ffab6616f5dc63e5"
      
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provide = new firebase.auth.GoogleAuthProvider();

provide.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provide);

export default firebase;
