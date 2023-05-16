import { db } from '../firebase';
import { doc, getDoc, updateDoc } from "firebase/firestore";

export const getPatientDetailsFunc = async (userId: string)=> {
    const docRef = doc(db, "patients", userId);
    const datas = (await getDoc(docRef));
    return datas.data() as PatientDetailsI
}

export const updatePatientDetailsFunc = async(data: PatientDetailsI)=> {
    return new Promise(async (resolve, reject) => {
        await updateDoc(
            // @ts-ignore
            doc(db, "patients", data.storage_id), data) 
                .then( () => resolve(""))
                .catch(err=> {
                    reject(err)
                })
    })
}