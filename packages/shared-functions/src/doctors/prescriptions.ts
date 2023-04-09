import { db } from '../firestore';
import { doc, arrayUnion, getDoc, updateDoc, arrayRemove, setDoc } from "firebase/firestore";

export const addNewPrescriptionFunc = async (prescription: PrescriptionI, patientId: string) => {
  return new Promise(async (resolve, reject) => {
    const patientRef = doc(db, 'patients', patientId);
    await updateDoc(
      patientRef,
      {
        prescriptions: arrayUnion(prescription)
      }) 
      .then( () => resolve(""))
      .catch(err=> {
        reject(err)
      })
  })
}

export const updatePrescriptionFunc = async (updatedPrescription: PrescriptionI, patientId: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const patientRef = doc(db, 'patients', patientId);
      const patientSnap = await getDoc(patientRef);
      const patientData = patientSnap.data();

      if (patientData) {
        const prescriptions = patientData.prescriptions;
        const oldPrescription = prescriptions.find((prescription: PrescriptionI) => prescription.id === updatedPrescription.id);

        if (oldPrescription) {
          await updateDoc(patientRef, {
            prescriptions: arrayRemove(oldPrescription),
          });

          await updateDoc(patientRef, {
            prescriptions: arrayUnion(updatedPrescription),
          });

          resolve("");
        } else {
          reject(`Prescription with id ${updatedPrescription.id} not found`);
        }
      } else {
        reject(`Patient with id ${patientId} not found`);
      }
    } catch (err) {
      reject(err);
    }
  });
};

export const deletePrescriptionFunc = async (prescriptionIds: string[], patientId: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const patientRef = doc(db, 'patients', patientId);
      const patientSnap = await getDoc(patientRef);
      const patientData = patientSnap.data();

      if (patientData) {
        const prescriptions = patientData.prescriptions;
        const prescriptionsToDelete = prescriptions.filter((prescription: PrescriptionI) => prescriptionIds.includes(prescription.id));

        if (prescriptionsToDelete.length > 0) {
          const updatedPrescriptions = prescriptions.filter((prescription: PrescriptionI) => !prescriptionIds.includes(prescription.id));
          await updateDoc(patientRef, {
            prescriptions: updatedPrescriptions,
          });

          resolve('');
        } else {
          reject('No prescriptions found with the provided ids');
        }
      } else {
        reject(`Patient with id ${patientId} not found`);
      }
    } catch (err) {
      reject(err);
    }
  });
};
