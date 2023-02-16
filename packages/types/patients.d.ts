interface DiseasesI {
    name: string;
    notes: string;
    id: number
}

interface PrescriptionI {
    end: string;
    start: string;
    name: string;
    notes: string;
    recurring: boolean;
}

interface PatientDetailsI {
    name: string;
    surname: string;
    address: string;
    address_2: string;
    dob: string;
    email: string;
    ethnicity: string;
    home_phone: string;
    id: string;
    mobile: string;
    nhs_number: string;
    sex: "F" | "M" | "other" | "do not want to say";
    prescriptions: PrescriptionI[];
    diseases: DiseasesI[];
    doctors_allowed: BriefDoctorDetailsI[]
}