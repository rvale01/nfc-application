interface Diseases {
    name: String;
    notes: String;
}

interface Prescription {
    end: String;
    start: String;
    name: String;
    notes: String;
    recurring: boolean;
}

interface PatientDetails {
    name: String;
    surname: String;
    address: String;
    address_2: String;
    dob: String;
    email: String;
    ethnicity: String;
    home_phone: String;
    member_id: String;
    id: String;
    mobile: String;
    nhs_number: String;
    sex: "F" | "M" | "other" | "do not want to say";
    prescriptions: Prescription[];
    diseases: Diseases[]
}