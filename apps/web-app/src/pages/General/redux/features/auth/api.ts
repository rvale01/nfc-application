import { auth } from '../../../../../../firebase';
import {  signInWithEmailAndPassword   } from 'firebase/auth';

interface loginUserI {
    email: string;
    password: string;
}
export const loginUser = ({email, password}: loginUserI) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        window.location.href="/"
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // TODO: handle error
        console.log(errorCode, errorMessage)
    });
   
}