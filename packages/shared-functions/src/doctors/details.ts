import { db } from '../firestore';
import { doc, getDoc, setDoc } from "firebase/firestore";

export const getDoctorDetails = async (userId: string) => {
    const docRef = doc(db, "doctors", userId);
    const data = (await getDoc(docRef));
    return data.data() as DoctorDetailsI
}

export const updateDocDetailsFunc = async(data: DoctorDetailsI) => {
    return new Promise(async (resolve, reject) => {
        const usersId = localStorage.getItem('user_id') as string
        await setDoc(
            doc(db, "doctors", usersId),data) 
                .then( () => resolve(""))
                .catch(err=> {
                    reject(err)
                })
    })
}