import { db } from '../firestore';
import { doc, getDoc, setDoc } from "firebase/firestore";

export const getDoctorDetails = async (userId: string) => {
    const docRef = doc(db, "doctors", userId);
    const data = (await getDoc(docRef));
    return data.data() as DoctorDetailsI
}

export const updateDocDetailsFunc = (data: DoctorDetailsI, userId: string) => {
    return new Promise(async (resolve, reject) => {
        await setDoc(
            doc(db, "doctors", userId),data) 
                .then( () => resolve(""))
                .catch(err=> {
                    reject(err)
                })
    })
}