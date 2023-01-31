interface DiseasesI {
    name: String;
    notes: String;
}

interface PrescriptionI {
    end: String;
    start: String;
    name: String;
    notes: String;
    recurring: boolean;
}

interface PatientDetailsI {
    name: String;
    surname: String;
    address: String;
    address_2: String;
    dob: String;
    email: String;
    ethnicity: String;
    home_phone: String;
    id: String;
    mobile: String;
    nhs_number: String;
    sex: "F" | "M" | "other" | "do not want to say";
    prescriptions: Prescription[];
    diseases: Diseases[];
}