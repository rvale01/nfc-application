import { db } from '../firestore';
import { doc, getDoc, updateDoc } from "firebase/firestore";

export const getPatientDetails = async (userId: string):PatientDetailsI=> {
    const docRef = doc(db, "patients", userId);
    const datas = (await getDoc(docRef));
    return datas.data()
}

export const updatePatientDetailsFunc = async(data: PatientDetailsI) => {
    return new Promise(async (resolve, reject) => {
        await updateDoc(
            doc(db, "patients", data.storage_id),data) 
                .then( () => resolve(""))
                .catch(err=> {
                    reject(err)
                })
    })
}