// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    // apiKey: "AIzaSyA1AswgslRqhuGLUnvjK7pxs2QlCAoYtdQ",
    // authDomain: "toggl-fe02b.firebaseapp.com",
    // projectId: "toggl-fe02b",
    // storageBucket: "toggl-fe02b.appspot.com",
    // messagingSenderId: "230119673171",
    // appId: "1:230119673171:web:dabb6158fab49e031865a6"
    apiKey: "AIzaSyAffNygFDdfAwwFk8qO7ox9I-0YtoCptL8",
    authDomain: "togglteam.firebaseapp.com",
    projectId: "togglteam",
    storageBucket: "togglteam.appspot.com",
    messagingSenderId: "373130792327",
    appId: "1:373130792327:web:327dbdf71579f2f3d7d722",
    // measurementId: "G-DFKTPPY7P6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)