import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";


export const getDoctorsListFunc = async(patientId: string) => {
    const q = query(collection(db, "patient_doctor_relation"), where("patients", "array-contains", patientId));
    const queryDocsIds = await getDocs(q);
    let doctorsIds: string[] = []
    queryDocsIds.forEach((doc) => {
        doctorsIds.push(doc.id);
      });
    
    
    const q2 = query(collection(db, "doctors"), where("__name__", "in", doctorsIds));
    const queryDocsDetails = await getDocs(q2);
    
    const doctorsList: BriefDoctorDetailsI[] = []
    queryDocsDetails.forEach(async(patientDoc) => {
        doctorsList.push(patientDoc.data() as BriefDoctorDetailsI)
    });

    return doctorsList 
}