import { db } from '../firebase';
import { doc, arrayUnion, getDoc, updateDoc, arrayRemove, setDoc } from "firebase/firestore";

export const addNewDiseaseFunc = async (disease: DiseasesI, patientId: string) => {
    return new Promise(async (resolve, reject) => {
        const patientRef = doc(db, 'patients', patientId);
        await updateDoc(
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

export const updateDiseaseFunc = async (updatedDisease: DiseasesI, patientId: string) => {
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

export const deleteDiseaseFunc = async (diseasesIds: string[], patientId: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const patientRef = doc(db, 'patients', patientId);
      const patientSnap = await getDoc(patientRef);
      const patientData = patientSnap.data();

      if (patientData) {
        const diseases = patientData.diseases;
        const diseasesToDelete = diseases.filter((disease: DiseasesI) => diseasesIds.includes(disease.id));

        if (diseasesToDelete.length > 0) {
          const updatedDiseases = diseases.filter((disease: DiseasesI) => !diseasesIds.includes(disease.id));
          await updateDoc(patientRef, {
            diseases: updatedDiseases,
          });

          resolve('');
        } else {
          reject('No diseases found with the provided ids');
        }
      } else {
        reject(`Patient with id ${patientId} not found`);
      }
    } catch (err) {
      reject(err);
    }
  });
};