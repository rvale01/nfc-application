import { db } from '../firestore';
import { doc, setDoc, arrayUnion, getDoc, updateDoc, arrayRemove } from "firebase/firestore";

export const addNewDisease = async (disease: DiseasesI, patientId: string) => {
    return new Promise(async (resolve, reject) => {
        const patientRef = doc(db, 'patients', patientId);
        await setDoc(
            patientRef,
            {
                diseases: arrayUnion(disease)
            }) 
                .then( () => resolve(""))
                .catch(err=> {
                    reject(err)
                })
    })
}

export const updateDisease = async (updatedDisease: DiseasesI, patientId: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const patientRef = doc(db, 'patients', patientId);
      const patientSnap = await getDoc(patientRef);
      const patientData = patientSnap.data();

      if (patientData) {
        const diseases = patientData.diseases;
        const oldDisease = diseases.find((disease: DiseasesI) => disease.id === updatedDisease.id);

        if (oldDisease) {
          await updateDoc(patientRef, {
            diseases: arrayRemove(oldDisease),
          });

          await updateDoc(patientRef, {
            diseases: arrayUnion(updatedDisease),
          });

          resolve("");
        } else {
          reject(`Disease with id ${updatedDisease.id} not found`);
        }
      } else {
        reject(`Patient with id ${patientId} not found`);
      }
    } catch (err) {
      reject(err);
    }
  });
};
