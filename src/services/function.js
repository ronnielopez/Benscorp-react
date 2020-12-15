import { auth } from "./firebase";
import firebase from 'firebase';

export function signUp (email, password){
    return auth.createUserWithEmailAndPassword(email, password)
}

export function signIn (email, password) {
    return auth.signInWithEmailAndPassword(email, password);
}


