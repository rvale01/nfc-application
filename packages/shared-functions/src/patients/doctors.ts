import { collection, doc, query, where, getDoc, getDocs } from "firebase/firestore";
import { db } from "../firestore";


export const getDoctorsListFunc = async(patientId: string) => {
    const q = query(collection(db, "doctors"), where("patients", "array-contains", patientId));
    const queryDocsIds = await getDocs(q);
    let doctorsIds = []
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