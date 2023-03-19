import { db } from '../firestore';
import { doc, getDoc, setDoc } from "firebase/firestore";

export const getPatientsDetails = async (userId: string):PatientDetailsI=> {
    const docRef = doc(db, "patients", userId);
    const datas = (await getDoc(docRef));
    return datas.data()
}

export const updatePatientDetailsFunc = async(data: PatientDetailsI) => {
    return new Promise(async (resolve, reject) => {
        const userId = localStorage.getItem('user_id') as string
        await setDoc(
            doc(db, "patients", userId),data) 
                .then( () => resolve(""))
                .catch(err=> {
                    reject(err)
                })
    })
}