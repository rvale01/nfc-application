interface DiseasesI {
    name: string;
    notes: string;
    id: string;
}

interface PrescriptionI {
    end: string;
    start: string;
    name: string;
    notes: string;
    recurring: boolean;
    id: string;
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
    shared_code: string;
    storage_id: string;
}