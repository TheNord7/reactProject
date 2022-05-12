import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBIiohtSe0079Da-nG50P5jRfzujJLGCNQ",
    authDomain: "reactapp-c2c9f.firebaseapp.com",
    databaseURL: "https://reactapp-c2c9f-default-rtdb.firebaseio.com",
    projectId: "reactapp-c2c9f",
    storageBucket: "reactapp-c2c9f.appspot.com",
    messagingSenderId: "269898311711",
    appId: "1:269898311711:web:1c404716033c6021e98d2a"
};

const firebase = initializeApp(firebaseConfig);

export default firebase;