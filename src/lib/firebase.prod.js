import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { seedData } from "../seedData";
const config = {
	apiKey: "AIzaSyAAl9w1AjmJsxnacYnpZFArM2p7dcT0myk",
	authDomain: "netfilx-350ed.firebaseapp.com",
	projectId: "netfilx-350ed",
	storageBucket: "netfilx-350ed.appspot.com",
	messagingSenderId: "875830351080",
	appId: "1:875830351080:web:e729061f8f0ff27bb0655d",
	measurementId: "G-ZV47DVF56N"
};

const firebase = Firebase.initializeApp(config);
seedData(firebase);

export { firebase };