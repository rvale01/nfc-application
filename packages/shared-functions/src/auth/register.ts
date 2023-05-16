import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { v4 as uuidv4 } from 'uuid';

export const registerFunc = async({email, password, doctorCode, name, surname}:RegisterI) => {
    return new Promise(async (resolve, reject) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then( async(res) => 
            doctorCode ?
                await setDoc(
                    doc(db, "doctors", res.user.uid),
                    {
                        name,
                        surname,
                        doctorCode,
                    }
                )
                .then(() => resolve(""))
                .catch((err)=> reject(err))
            :   
                await setDoc(
                    doc(db, "patients", res.user.uid),
                    {
                        name,
                        surname,
                        doctorCode,
                        storage_id: res.user.uid,
                        shared_code: uuidv4(),
                    }
                )
                .then(() => resolve(""))
                .catch((err)=> {
                    reject(err)
                })
        ).catch(err=> {
            reject(err)
        })
    })
}