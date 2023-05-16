import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export const loginFunc = async({email, password}: LoginUserI) => {
    return new Promise(async (resolve, reject) => {
        signInWithEmailAndPassword(auth, email, password)
            .then( () => resolve(""))
            .catch(err=> {
                reject(err)
            })
    })
}

export const logout = () => {
    return new Promise(async (resolve, reject) => {
        auth.signOut()
            .then( () => resolve(""))
            .catch(err=> {
                reject(err)
            })
    })
}