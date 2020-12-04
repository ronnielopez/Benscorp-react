import { auth } from "./firebase";
import firebase from 'firebase';

export function signUp (email, password){
    return auth.createUserWithEmailAndPassword(email, password)
}

export function signIn (email, password) {
    return auth.signInWithEmailAndPassword(email, password)
    .then((user) =>{
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
            sessionStorage.setItem('idToken', idToken);
          }).catch(function(error) {
            // Handle error
          });
    }).catch((error) =>{
        
    })
}


