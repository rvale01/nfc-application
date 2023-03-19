import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firestore';

export const loginFunc = async({email, password}: LoginUserI) => {
    return new Promise(async (resolve, reject) => {
        signInWithEmailAndPassword(auth, email, password)
            .then( () => resolve(""))
            .catch(err=> {
                reject(err)
            })
    })
}